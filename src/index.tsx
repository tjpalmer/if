import {h, render} from 'preact';
import Router from 'preact-router';
import {Link} from 'preact-router/match';

addEventListener('load', start);

function start() {
  render(<Root/>, document.getElementById('root')!);
}

type Mount = {path: string};

function Root() {
  return <Router>
    <Intro path="/"/>
    <Spry path="/spry"/>
    <p path="/river">Some information here.</p>
    <p path="/valley">Some information here.</p>
    <p path="/way">Some information here.</p>
  </Router>;
}

function Go(props: {children: {}, to: string}) {
  return <Link activeClassName="active" href={props.to}>
    {props.children}
  </Link>;
}

function Intro(props: Mount) {
  return <div>
    <Go to="/spry">Spry</Go> winds {' '}
    <Go to="/way">his way</Go> along {' '}
    <Go to="/river">Slick River</Go> toward {' '}
    <Go to="/valley">Red Stone Valley</Go>.
  </div>;
}

function Spry(props: Mount) {
  return <div>
    About average size for a <Go to="/runner">Runner</Go>, but faster than
    average, Spry is also missing most of <Go to="/ear">his right ear</Go>.
  </div>;
}
