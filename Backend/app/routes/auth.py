from app.utils.auth import hashPassword, verifyPassword
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.users import User
from app.schemas.user import UserCreate, UserLogin, UserResponse, LoginResponse

router = APIRouter()


@router.post("/signup", response_model=UserResponse)
def createUser(user: UserCreate, db: Session = Depends(get_db)):
    dbUser = db.query(User).filter(User.email == user.email).first()

    if dbUser:
        raise HTTPException(
            status_code=409,
            detail="User with this email already exists"
        )

    newUser = User(
        name=user.name,
        email=user.email,
        password=hashPassword(user.password)
    )

    db.add(newUser)
    db.commit()
    db.refresh(newUser)

    return newUser


@router.post("/login", response_model=LoginResponse)
def checkuser(user: UserLogin, db: Session = Depends(get_db)):
    dbUser = db.query(User).filter(User.email == user.email).first()

    if not dbUser:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    if not verifyPassword(user.password, dbUser.password):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    return {
        "message": "Login successful",
        "user": dbUser
    }