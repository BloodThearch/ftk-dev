from fastapi import FastAPI

app = FastAPI()

@app.get("/isFatakClosed")
async def isFatakClosed():
    flag = 0
    with open("isFatakClosed.txt", "r") as f:
        if f.read() == "1":
            flag = 1
    return {"flag": flag}