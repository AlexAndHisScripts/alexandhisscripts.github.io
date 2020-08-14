import os
from PIL import Image, ImageDraw, ImageFont
import time
directory = r"C:\Users\alexc\Documents\GitHub\alexandhisscripts.github.io\WikiImages"

fileCount=0
for filename in os.listdir(directory):
    fileCount += 1

i = 0

target = int(input("Target > "))

if target == 0:
    target = 256
    
qualitySet = int(input("Quality > "))

if qualitySet == 0:
    qualitySet = 40

debug = False
    
for filename in os.listdir(directory):
    try:
        i += 1
        image = Image.open(directory + "\\" + filename)

        x,y = image.size

        ################################

        multiplier = 1

        if x > y:

            newy = y

            while newy > target:
                multiplier = multiplier - 0.0001
                newy = y * multiplier
                #print(str(newy))

            newx = x * multiplier

        if y > x:
            newx = x

            while newx > target:
                multiplier = multiplier - 0.0001
                newx = x * multiplier
                #print(str(newx))

            newy = y * multiplier
        
        ################################

        newImage = image.resize((int(newx+1), int(newy+1)))

        newImage = newImage.convert("RGB")

        print(str(filename))
        
        if debug == True:
            fnt = ImageFont.truetype(r'C:\Users\alexc\Downloads\YoutubeDownloads\Orbitron\Orbitron-VariableFont_wght.ttf', 50)
            d = ImageDraw.Draw(newImage)
            d.text((10,10), "Low \n resolution \n Debug mode", font=fnt, fill=(255,0,0))

        savePath = directory + "\\resized\\" + filename.replace("png","jpg")
        newImage.save(savePath, "JPEG", quality=qualitySet)

        percentage = 100 * i / fileCount

        print(filename + " : " + str(percentage) + "%")
    except PermissionError:
        continue
