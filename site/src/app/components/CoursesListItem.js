import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';

const getDeptFromPath = function(path) {
  // "charts/CSC/CSC108H1-S-20171"
  return path.substring(path.indexOf('/') + 1, path.lastIndexOf('/'));
};

const getCourseFromPath = function(path) {
  const fileDir = path.lastIndexOf('/') + 1;
  const ext = path.indexOf('.svg');

  return path.substring(fileDir, ext);
};

export default function CoursesListItem({ course }) {
  return (
    <p>
      <Link to={`/courses/course/${getDeptFromPath(course)}/${getCourseFromPath(course)}`}>{getCourseFromPath(course)}</Link>
    </p>
  );
}
