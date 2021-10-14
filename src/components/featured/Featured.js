import './Featured.css'
import Products from '../products/Products'
import { useParams } from 'react-router'

const Featured = () => {
    const { category } = useParams();

    return (
        <section id="featured" className="py-5">
            <div className="container">
                <div className="title text-center">
                    <h2 className="position-relative d-inline-block">Featured Products</h2>
                </div>
                <Products cat={category} featured={true} />
            </div>
        </section>
    )
}

export default Featured
