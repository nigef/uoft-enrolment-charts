import Inferno from 'inferno';
import Component from 'inferno-component';
import 'whatwg-fetch';

import Chart from './Chart';
import CoursesList from './CoursesList';

const getDeptFromPath = function(path) {
  return path.substring(path.indexOf('/') + 1);
};

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
          const categories = [];

          data.tree.forEach(item => {
            if (!item.path.startsWith('charts/')) {
              return;
            }

            // Folder ('tree')
            if (item.type === 'tree') {
              categories.push({
                name: getDeptFromPath(item.path),
                courses: []
              });
            }

            // Course ('blob')
            if (item.type === 'blob') {
              categories[categories.length - 1].courses.push(item.path);
            }
          });

          this.setState({
            courses: categories
          });
        });
  }

  onClickCourse(course) {
    this.setState({
      activeCourse: course
    });
  }

  render() {
    return (
      <div>
        { this.state.activeCourse && <Chart url={this.state.activeCourse} /> }

        <CoursesList data={this.state.courses} onClickCourse={this.onClickCourse} />
      </div>
    );
  }
}
