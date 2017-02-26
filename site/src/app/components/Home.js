import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';

export default function Home() {
  return (
    <div>
      <p>Hello world</p>

      <p><Link to="/courses">All courses</Link></p>
    </div>
  );
}
