import Inferno from 'inferno';
import Component from 'inferno-component';

import CoursesListItem from './CoursesListItem';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <h2 onClick={this.onToggle}>{this.state.collapsed ? '>' : 'v'} {this.props.data.name}</h2>
        {
          !this.state.collapsed &&
          this.props.data.courses.map(course => <CoursesListItem course={course} />)
        }
      </div>
    );
  }
}

