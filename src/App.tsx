import type { Component } from 'solid-js';

import logo from './logo.svg';
import Card from './components/card';

const App: Component = () => {
    return (
        <div>
            <header>
                <img style={{height: "45px", width: "45px"}} src="/src/logo.svg" alt="" />
                <h1>Solid Store</h1>
            </header>
            <Card />
        </div>
    );
};

export default App;
