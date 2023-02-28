import pandas as pd
import datetime

def extractDfUsingStation(df, stationCode):
    return df.loc[df["stationCode"] == stationCode]

def extractDfUsingDate(df, date):
    count = 0
    recordIndexList = []
    for dt in df['expectedArrivalTime']:
        temp = dt.split(" ")
        if temp[1] == date:
            recordIndexList.append(count)
        count += 1
    return df.iloc[recordIndexList]

def checkFatak(df):
    now = datetime.datetime.now()
    timechange = datetime.timedelta(minutes=20)
    for arrivalTime in df["expectedArrivalTime"]:
        at = arrivalTime.split(" ")[0]
        at = datetime.datetime.strptime(at, "%H:%M")
        at2 = at + timechange
        print(at.time()," ",now.time())
        if now.time() > at.time() and now.time()<at2.time():
            print("yes")
            return 1
        else:
            print("no")
    return 0

def main():
    df = pd.read_csv("extractedData.csv")
    exdf1 = extractDfUsingStation(df, "PTA") # exdf1 = extracted df 1
    exdf1 = exdf1.reset_index()
    exdf1 = exdf1.drop(['index'], axis=1)
    exdf2 = extractDfUsingDate(exdf1, "25-Feb")
    if checkFatak(exdf2) == 1:
        with open("isFatakClosed.txt", "w") as f:
            f.write("1")
    else:
        with open("isFatakClosed.txt", "w") as f:
            f.write("0")

if __name__ == "__main__":
    main()