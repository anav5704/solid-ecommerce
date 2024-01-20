import { ComponentProps } from "solid-js"

export default function Card(props: { title: string, description: string, id: number }) {
    return (
        <div class="col-span-1 p-3 bg-zinc-900/75 border border-zinc-800 rounded-xl">
            <h2 class="text-xl font-semibold">{props.title}</h2>
            <p>{props.description}</p>
            <div class="flex justify-end">
            <button class="mt-3 bg-gradient-to-tr from-sky-700 to-blue-400 px-6 py-2 rounded-xl">Buy</button>
            </div>
        </div>
    )
}