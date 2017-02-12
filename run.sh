#!/bin/bash
python ./generate-charts.py ../uoft-timetable-archive/201701/

git pull --rebase
git add .
git commit -a -m "Update charts"
git push origin master
