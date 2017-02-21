import Inferno from 'inferno';
import Component from 'inferno-component';

const getCourseFromPath = function(path) {
  var fileDir = path.lastIndexOf('/') + 1;
  var ext = path.indexOf('.svg');

  return path.substring(fileDir, ext);
};

export default function CoursesListItem({ data, onClickCourse }) {
  return <p><a href="#" onClick={() => { onClickCourse(data); }}>{getCourseFromPath(data)}</a></p>;
}
