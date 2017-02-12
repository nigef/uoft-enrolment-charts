#!/bin/bash
python ./generate_charts.py ../uoft-timetable-archive/201701/

git add .
git commit -a -m "Update charts (`date +'%Y-%m-%d %H:%M:%S'`)"
git push origin master
