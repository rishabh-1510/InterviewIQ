from fastapi import FastAPI
from sqlalchemy import text
from app.database import Base,engine
from app.models.users import User
from app.routes.auth import router as auth_router 
from fastapi.middleware.cors import CORSMiddleware
app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

Base.metadata.create_all(bind=engine)

@app.get("/")
def home():
    return {"message":"API is running"}

app.include_router(auth_router)

@app.get("/test-db")
def test_db():
    with engine.connect() as connection:
        result = connection.execute(text("SELECT 1")) 
        return {"database": result.scalar()}