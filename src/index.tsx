import Router from 'preact-router';
import {h, render} from 'preact';
import {Link} from 'preact-router/match';

let Main = () => (
  <Router>
    <div path="/">
      <p>Hello!</p>
      <p><Link activeClassName="active" href="/about">About</Link></p>
    </div>
    <p path="/about">Some information here.</p>
  </Router>
);

addEventListener('load', () => {
  render(
    <Main/>,
    document.getElementById('root')!
  )
});
