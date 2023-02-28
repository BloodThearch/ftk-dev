import os
from bs4 import BeautifulSoup
import pandas as pd

def parseHtml(srcFilePath):
    with open(srcFilePath, 'r') as f:
        contents = f.read()
        soup = BeautifulSoup(contents, 'lxml')
    return soup

def createDf(soup, train):
    stationCards = soup.find_all(class_="w3-card-2 w3-light-grey")
    trainCode = []
    expectedArrivalTime = []
    actualArrivalTime = []
    stationCode = []
    expectedDepartureTime = []
    actualDepartureTime = []
    for card in stationCards:
        cardContainers = card.find_all(class_="w3-container")
        trainCode.append(train)

        # arrival info
        arrivalTimes = cardContainers[0].find_all("font")
        expectedArrivalTime.append(arrivalTimes[0].text.strip())
        actualArrivalTime.append(arrivalTimes[1].find("b").text.strip())

        # station info
        stationCode.append(cardContainers[2].find_all("b")[1].text.strip())

        # departure info
        departureTimes = cardContainers[3].find_all("b")
        expectedDepartureTime.append(departureTimes[0].find("font").text.strip())
        actualDepartureTime.append(departureTimes[1].text.strip())

    # creating dictionary to convert it into dataframe
    trainScheduleDict = {
        'trainCode': trainCode,
        'stationCode': stationCode,
        'expectedArrivalTime': expectedArrivalTime,
        'actualArrivalTime': actualArrivalTime,
        'expectedDepartureTime': expectedDepartureTime,
        'actualDepartureTime': actualDepartureTime,
    }

    # creating dataframe
    df = pd.DataFrame(trainScheduleDict)
    return df

if __name__ == "__main__":

    # init
    with open("extractedData.csv", mode="w"):
        pass
    trainsPathList = []

    # Get all trains html paths
    for dirName in os.listdir(os.getcwd()+"/trains"):
        trainsPathList.append(os.getcwd()+ "/trains/" + dirName + "/NTES.html")
        soup = parseHtml(os.getcwd()+ "/trains/" + dirName + "/NTES.html")
        df = createDf(soup, dirName)
        # appending in csv
        df.to_csv('extractedData.csv', mode="a", index=False)