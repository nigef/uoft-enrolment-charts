import Inferno from 'inferno';
import Component from 'inferno-component';
import fetch from 'unfetch'

import Chart from './Chart';
import CoursesList from './CoursesList';

const REPO_URL = 'https://api.github.com/repos/arkon/uoft-enrolment-charts/git/trees/master?recursive=1';

const getDeptFromPath = function(path) {
  return path.substring(path.indexOf('/') + 1);
};

export default class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: null
    };
  }

  componentDidMount() {
    fetch(REPO_URL)
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

  render() {
    return (
      <div>
        { (this.props.params.dept && this.props.params.course) &&
            <Chart dept={this.props.params.dept} course={this.props.params.course} />
        }

        { this.state.courses ?
            <CoursesList data={this.state.courses} /> :
            <p>Loading...</p>
        }
      </div>
    );
  }
}
