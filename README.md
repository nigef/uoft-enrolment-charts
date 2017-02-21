# uoft-enrolment-charts

Generates charts of course enrolment numbers from data scraped by [uoft-timetable-archive][] (from the [University of Toronto Faculty of Arts and Science timetable](https://timetable.iit.artsci.utoronto.ca/)).

You can see the charts on [the website](https://echeung.me/uoft-enrolment-charts/) as well.


## Requirements

- [Python](https://www.python.org/)
- [Gnuplot](http://gnuplot.info/)


## Cron jobs

To automate the chart generation, cron jobs are being used to both run [uoft-timetable-archive][] and this.

```
30 19 * * * /Users/eugene/Documents/GitHub/uoft-timetable-archive/run.sh
45 19 * * * /Users/eugene/Documents/GitHub/uoft-enrolment-charts/run.sh
```

[uoft-timetable-archive]: https://github.com/freeatnet/uoft-timetable-archive
