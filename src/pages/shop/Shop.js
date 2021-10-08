import { useParams } from "react-router"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import Products from "../../components/products/Products"

const Shop = () => {
    const { category } = useParams();

    return (
        <div>
            <Navbar />
            <div className="container">
                <Products cat={category} />
            </div>
            <Footer />
        </div>
    )
}

export default Shop
