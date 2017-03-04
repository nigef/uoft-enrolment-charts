#!/bin/bash
python ./generate_charts.py ../uoft-timetable-archive/201701/

git add charts/*
git commit -m "Update charts (`date +'%Y-%m-%d %H:%M:%S'`)"
git push origin master
