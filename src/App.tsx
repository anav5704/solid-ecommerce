import type { Component } from 'solid-js'
import Card from './components/card'
import logo from './logo.svg'

const App: Component = () => {
    return (
        <div class='bg-zinc-950 min-h-screen text-white'>
            <header class='flex items-center gap-x-3 px-20 py-5'>
                <img class='h-10 w-10' src="/src/logo.svg" alt="" />
                <h1 class='font-bold text-2xl bg-gradient-to-tr from-sky-700 to-blue-400 bg-clip-text text-transparent'>Solid Store</h1>
            </header>
            <main class='grid grid-cols-4 m-20'>
                <Card
                    title="Solid Bra"
                    description="A bra made by the Solid JS team"
                />
            </main>
        </div>
    )
}

export default App;
