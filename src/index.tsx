import { render } from 'solid-js/web';

import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import { Route, Router } from '@solidjs/router';
import NavBar from './components/nav-bar';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

render(() =>
    <>
        <NavBar />
        <Router>
            <Route path="/" component={ Home } />
            <Route path="/about" component={ About } />
        </Router>
    </>
    , root!);
