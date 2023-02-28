from fastapi import FastAPI
import os
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

@app.get("/isFatakClosed")
async def isFatakClosed():
    flag = 0
    os.system("python prototype.py")
    with open("isFatakClosed.txt", "r") as f:
        if f.read() == "1":
            flag = 1
    return {"flag": flag}