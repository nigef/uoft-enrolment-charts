import Inferno from 'inferno';
import Component from 'inferno-component';

const RAW_URL = 'https://cdn.rawgit.com/arkon/uoft-enrolment-charts/master/';

export default function Chart({ url }) {
  return <img src={`${RAW_URL}${url}`} />;
}
