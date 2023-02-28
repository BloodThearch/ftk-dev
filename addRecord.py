import pandas as pd

df = pd.read_csv("extractedData.csv")

df.loc[len(df.index)] = [
    "imaginaryTrain1",
    "PTA",
    "00:00 25-Feb",
    "15:35 01-Mar*",
    "15:37 01-Mar",
    "15:37 01-Mar*"
] 

df.to_csv("extractedData.csv", index=False)
# 11057,JNL  PF 1*,15:35 01-Mar,15:35 01-Mar*,15:37 01-Mar,15:37 01-Mar*