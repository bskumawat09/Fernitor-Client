import { Add, Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Footer from "../../components/footer/Footer";
import Navbar, { handleOpen } from "../../components/navbar/Navbar";
import Reviews from "../../components/reviews/Reviews";
import { addToCart } from "../../redux/apiCalls";
import { publicRequest } from "../../requestMethods";
import "./Product.css";

const Product = () => {
	const { currentUser } = useSelector((state) => state.user);
	const { pid } = useParams();
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();

	useEffect(() => {
		const getProduct = async () => {
			try {
				const response = await publicRequest.get(`/products/${pid}`);
				// console.log("ProductResponse", response.data);
				setProduct(response.data.product);
			} catch (err) {
				console.log("ERROR", err);
			}
		};
		getProduct();
	}, [pid]);

	const handleQuantity = (type) => {
		if (type === "decrement") {
			quantity > 1 && setQuantity(quantity - 1);
		} else if (type === "increment") {
			setQuantity(quantity + 1);
		}
	};

	const handleAddToCart = () => {
		if (currentUser) {
			addToCart(dispatch, { product, quantity }, currentUser._id);
		} else {
			handleOpen();
		}
	};

	return (
		<div>
			<Navbar />

			<section className="single-product pb-5">
				<div className="container">
					<div className="row">
						<div className="col-10 mx-auto text-center col-lg-6 my-lg-5">
							<div className="img-container">
								<img
									src={product.image?.url}
									className="single-big-img"
									alt=""
								/>
							</div>
							<div className="row single-product-photos mt-2">
								<div className="col-4 single-product-photo p-2">
									<img src={product.image?.url} className="img-fluid" alt="" />
								</div>
								<div className="col-4 single-product-photo p-2">
									<img src={product.image?.url} className="img-fluid" alt="" />
								</div>
								<div className="col-4 single-product-photo p-2">
									<img src={product.image?.url} className="img-fluid" alt="" />
								</div>
							</div>
						</div>
						<div className="col-10 mx-auto col-lg-6 single-product-info my-lg-5 px-lg-5">
							<h3 className="text-capitalize mt-3">{product.name}</h3>
							<h4 className="my-3">Rs {product.price}</h4>
							<p className="text-muted my-4">{product.description}</p>
							<h5 className="text-capitalize my-3">
								available :
								<span className="text-capitalize ms-2">
									{product.inStock ? "In Stock" : "Out of Stock"}
								</span>
							</h5>
							<h5 className="text-capitalize mt-3 mb-3 mb-md-5">
								colors :
								<span className="d-inline-block ms-1">{product.color}</span>
							</h5>
							<hr />
							<div className="d-flex align-items-center my-2">
								<IconButton
									className="me-2"
									onClick={() => handleQuantity("decrement")}>
									<Remove />
								</IconButton>
								<span className="text-capitalize number">{quantity}</span>
								<IconButton
									className="ms-2"
									onClick={() => handleQuantity("increment")}>
									<Add />
								</IconButton>
								<div
									className="text-capitalize add-to-cart-icon-btn ms-5"
									onClick={handleAddToCart}>
									ADD TO CART
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Reviews pid={pid} />

			<Footer />
		</div>
	);
};

export default Product;
