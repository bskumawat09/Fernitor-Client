import { Search } from '@mui/icons-material'
import { Link } from "react-router-dom";
import './Product.css'

const Product = ({ item }) => {
    return (
        <div className="col-6 col-sm-4 col-lg-3 px-2 py-4">
            <div className="collection-img position-relative">
                <img src={item.image.url} className="w-100" alt="" />
                {item.onSale &&
                    <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                        sale
                    </span>
                }
            </div>
            <div className="text-center">
                <p className="text-capitalize mb-1 mt-2">{item.name}</p>
                <span className="fw-bold">Rs {item.price}</span>
                <div className="mt-3 d-flex justify-content-center align-items-center">
                    <Link to={`/product/${item._id}`} style={{ textDecoration: 'none' }}>
                        <div className="text-capitalize search-btn me-2"><Search /></div>
                    </Link>
                    <Link to={`/product/${item._id}`} style={{ textDecoration: 'none' }}>
                        <div className="text-capitalize add-to-cart-icon-btn">
                            add to cart
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Product
