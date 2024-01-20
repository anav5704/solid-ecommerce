import { useParams } from "@solidjs/router"
import { products } from "../../data/db"

export default function Product() {
    const params = useParams()
    const product = products[parseInt(params.id)]

    return (
        <main class="grid place-content-center">
            {product.title}
            <br />
            {product.description}
        </main>
    )
}