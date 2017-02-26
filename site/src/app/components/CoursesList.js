import Inferno from 'inferno';
import Component from 'inferno-component';

import CoursesListCategory from './CoursesListCategory';

export default function CoursesList({ data }) {
  return (
    <div>
      {
        data.map(dept => <CoursesListCategory data={dept} />)
      }
    </div>
  );
}
