import type { Component } from 'solid-js';

import logo from './logo.svg';
import Card from './components/card';

const App: Component = () => {
    return (
        <div class='bg-zinc-900 min-h-screen text-white'>
            <header class='flex items-center gap-x-3 p-5'>
                <img class='h-10 w-10' src="/src/logo.svg" alt="" />
                <h1 class='font-bold text-2xl bg-gradient-to-tr from-sky-700 to-blue-400 bg-clip-text text-transparent'>Solid Store</h1>
            </header>
            <Card />
        </div>
    );
};

export default App;
