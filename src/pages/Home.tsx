import { type Component } from 'solid-js'
import Card from '../components/card'

const Home: Component = () => {

    return (
        <main class='grid grid-cols-4 m-20'>
            <Card
                title="Solid Bra"
                description="A bra made by the Solid JS team"
            />
        </main>
    )
}

export default Home;
