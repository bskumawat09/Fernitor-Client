import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ item }) => {
	return (
		<div className="col-6 col-sm-4 col-lg-3">
			<div className="">
				<div className="collection-img position-relative">
					<img src={item.image.url} className="w-100" alt="" />
					{item.onSale && (
						<span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
							sale
						</span>
					)}
				</div>
				<Link to={`/product/${item._id}`}>
					<div className="text-center">
						<div className="fw-bold text-capitalize mb-1 mt-2">{item.name}</div>
						<div className="fs-4">Rs {item.price}</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Product;
