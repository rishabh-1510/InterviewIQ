from fastapi import FastAPI
from sqlalchemy import text
from app.database import Base,engine
from app.models.users import User

app=FastAPI()

Base.metadata.create_all(bind=engine)

@app.get("/")
def home():
    return {"message":"API is running"}

@app.get("/test-db")
def test_db():
    with engine.connect() as connection:
        result = connection.execute(text("SELECT 1"))
        return {"database": result.scalar()}