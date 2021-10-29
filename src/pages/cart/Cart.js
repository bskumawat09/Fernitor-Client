import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../../requestMethods";
import { removeFromCart } from "../../redux/apiCalls";
import { useHistory } from "react-router";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Cart.css";
import { Add, Close, Remove } from "@mui/icons-material";
import StripeCheckout from "react-stripe-checkout";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = () => {
	const KEY =
		"pk_test_51Jg0CWSG9kDQG5CgmyMPOzi49Uejlcp5Q6Jp61VhgFElM2R2St1bHdNRzBSBX49ItRsSkR5G6lov60C6Gn3Kt6mG00AeGVQ8hU";

	const { currentUser } = useSelector((state) => state.user);
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const [stripeToken, setStripeToken] = useState(null);
	const history = useHistory();

	const onToken = (token) => {
		setStripeToken(token);
	};
	console.log("stripeToken", stripeToken);

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const response = await publicRequest.post("/checkout/payment", {
					tokenId: stripeToken.id,
					amount: cart.total,
				});
				// console.log("StripeResponse", response);
				history.push("/success", { data: response.data });
			} catch (err) {
				console.log("ERROR", err);
			}
		};
		stripeToken && makeRequest();
	}, [stripeToken, cart.total, history]);

	const handleRemoveFromCart = (product) => {
		removeFromCart(dispatch, currentUser?._id, product);
	};

	return (
		<>
			<Navbar />
			<div className="container my-4">
				<div className="row g-3 justify-content-between">
					{cart.count ? (
						<>
							<div className="col-12 col-lg-7">
								<div className="row g-3">
									{cart.products.map((product) => (
										<div className="col-12 position-relative">
											<div className="d-flex bg-white p-3">
												<div className="cart-img-container">
													<img
														src={product.image.url}
														className="cart-img img-fluid"
														alt=""
													/>
												</div>
												<div className="w-50 p-2 p-md-3 my-auto">
													<Link to={`/product/${product._id}`}>
														<h5 className="mb-3 fw-bold">{product.name}</h5>
													</Link>
													<h6>
														{product.inStock ? "In Stock" : "Out of Stock"}
													</h6>
													<h6 className="text-capitalize my-2">
														color : {product.color}
													</h6>
													<h6 className="text-capitalize my-2">
														price : <span>Rs {product.price}</span>
													</h6>
													<div className="d-flex align-items-center">
														<IconButton className="me-2" size="small">
															<Remove />
														</IconButton>
														<span className="text-capitalize number">
															{product.quantity}
														</span>
														<IconButton className="ms-2" size="small">
															<Add />
														</IconButton>
													</div>
												</div>
											</div>
											<div className="remove-button">
												<IconButton>
													<Close
														onClick={() => handleRemoveFromCart(product)}
													/>
												</IconButton>
											</div>
										</div>
									))}
								</div>
							</div>
							<div className="col-12 col-lg-4">
								<div className="px-4 py-5 bg-white">
									<h3 className="text-uppercase mb-5">order summary</h3>
									<div className="d-flex justify-content-between">
										<p>Amount</p>
										<p>
											Rs <span>{cart.total}</span>
										</p>
									</div>
									<div className="d-flex justify-content-between">
										<p>Estimated Shipping</p>
										<p>
											Rs <span>30.0</span>
										</p>
									</div>
									<div className="d-flex justify-content-between">
										<p>Shipping Discount</p>
										<p>
											Rs <span> -30.0</span>
										</p>
									</div>
									<hr />
									<div className="d-flex justify-content-between total">
										<p>Total</p>
										<p>
											Rs <span>{cart.total}</span>
										</p>
									</div>
									<div className="col d-flex justify-content-end">
										<StripeCheckout
											image="https://t3.ftcdn.net/jpg/03/16/31/30/360_F_316313076_JUiH8Eh992qs4SSCSrdOIQnrMxDOakSk.jpg"
											name="Fernitor"
											billingAddress
											description={`You are paying Rs.${cart.total}`}
											amount={cart.total}
											token={onToken}
											stripeKey={KEY}>
											<button className="checkout-btn text-uppercase">
												checkout
											</button>
										</StripeCheckout>
									</div>
								</div>
							</div>
						</>
					) : (
						<div className="col-12 col-md-8 offset-md-2">
							<img src="/img/empty_cart.png" alt="" style={{ width: "100%" }} />
						</div>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Cart;
