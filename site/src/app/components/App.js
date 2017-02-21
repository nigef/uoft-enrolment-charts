import Inferno from 'inferno';
import Component from 'inferno-component';
import 'whatwg-fetch';

import Chart from './Chart';

// var getDeptFromPath = function(path) {
//   return path.substring(path.indexOf('/') + 1);
// };

// var getCourseFromPath = function(path) {
//   var fileDir = path.lastIndexOf('/') + 1;
//   var ext = path.indexOf('.svg');

//   return path.substring(fileDir, ext);
// };

// if (chart.type === 'tree') {
//   $elDept = $('<details><summary>' + getDeptFromPath(chart.path) + '</summary></details>');
//   $elCourses.append($elDept);
// } else if (chart.type === 'blob') {
//   $elCourse = $('<li>').text(getCourseFromPath(chart.path));
//   $elCourse.addClass('course');
//   $elCourse.attr('data-chart', chart.path);

//   $elDept.append($elCourse);
// }

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCourse: null,
      courses: []
    };

    this.onClickCourse = this.onClickCourse.bind(this);
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/arkon/uoft-enrolment-charts/git/trees/master?recursive=1')
      .then(res => res.json())
      .then(data => {
          const charts = data.tree.filter(item => item.path.startsWith('charts/'));

          this.setState({
            courses: charts
          });
        });
  }

  onClickCourse(course) {
    this.setState({
      activeCourse: course.path
    });
  }

  render() {
    return (
      <div>
        { this.state.activeCourse && <Chart url={this.state.activeCourse} /> }

        <ul>
          {
            this.state.courses.map((course) =>
              <li onClick={() => { this.onClickCourse(course); } }>{course.path}</li>
            )
          }
        </ul>
      </div>
    );
  }
}
