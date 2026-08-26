# from fastapi import APIRouter , Depends
# from sqlalchemy.orm import Session

# from app.database import get_db
# from app.models.users import User
# from app.schemas.user import UserCreate

# router = APIRouter()

# @router.post("/users")
# def createUser(user:UserCreate , db:Session = Depends(get_db)):
#     new_user = User(
#         name=user.name,
#         email=user.email,
#         password=user.password
#     )
#     db.add(new_user)
#     db.commit()
#     db.refresh(new_user)

#     return new_user