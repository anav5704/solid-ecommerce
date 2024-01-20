import { type Component } from 'solid-js'
import { products } from "../../data/db"
import Card from '../components/card'

const Home: Component = () => {

    return (
        <main class='grid grid-cols-3 m-20 gap-5'>
            {products.map((product, index) => (
                <Card
                    id={index}
                    title={product.title}
                    description={product.description}
                />
            ))}
        </main>
    )
}

export default Home;
