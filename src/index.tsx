import { render } from 'solid-js/web';

import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import NavBar from './components/nav-bar';
import { Route, Router } from '@solidjs/router';

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
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/product/:id" component={Product} />
        </Router>
    </>
    , root!);
