export default function NavBar() {
    return (
        <header class='flex items-center gap-x-3 px-20 py-5 bg-zinc-950 text-white'>
            <img class='h-10 w-10' src="/src/logo.svg" alt="" />
            <h1 class='font-bold text-2xl bg-gradient-to-tr from-sky-700 to-blue-400 bg-clip-text text-transparent'>Solid Store</h1>
        </header>
    )
}