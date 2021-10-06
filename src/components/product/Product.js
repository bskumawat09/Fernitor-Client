import { Star, StarBorderOutlined } from '@mui/icons-material'
import { Link } from "react-router-dom";

const Product = ({ item }) => {
    return (
        <div className="col-md-6 col-lg-4 col-xl-3 p-2 feat">
            <div className="collection-img position-relative img-container">
                <img src={item.image.url} className="w-100" alt="product" />
            </div>
            <div className="text-center">
                <div className="rating mt-3">
                    <span className="text-primary"><Star /></span>
                    <span className="text-primary"><Star /></span>
                    <span className="text-primary"><Star /></span>
                    <span className="text-grey"><StarBorderOutlined /></span>
                    <span className="text-grey"><StarBorderOutlined /></span>
                </div>
                <div className="text-center">
                    <p className="text-capitalize mt-3 mb-1">{item.name}</p>
                    <span className="fw-bold d-block">Rs {item.price}</span>
                    <Link to={`/product/${item._id}`}>
                        <div className="btn btn-primary mt-3">Add to Cart</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Product
