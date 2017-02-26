import Inferno from 'inferno';
import Component from 'inferno-component';

const RAW_URL = 'https://cdn.rawgit.com/arkon/uoft-enrolment-charts/master';

export default function Chart({ dept, course }) {
  return <img src={`${RAW_URL}/${dept}/${coures}`} />;
}
