#!/bin/bash

# Update charts
echo "Updating charts"
python ./generate_charts.py ../uoft-timetable-archive/201701/

git add charts/*
git commit -m "Update charts (`date +'%Y-%m-%d %H:%M:%S'`)"
git push origin master

# Update site
echo "Updating site"
git show -s --format=%H > site/data/commit.yml
tree -J --noreport -o charts.json ./charts
mv charts.json site/data/charts.json
cd site
bundle exec middleman deploy
