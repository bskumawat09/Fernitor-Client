import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../../requestMethods";
import { removeFromCart } from "../../redux/apiCalls";
import { useHistory } from "react-router";
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import "./Cart.css"
import { Add, Remove } from "@mui/icons-material";

const Cart = () => {
    const KEY = 'pk_test_51Jg0CWSG9kDQG5CgmyMPOzi49Uejlcp5Q6Jp61VhgFElM2R2St1bHdNRzBSBX49ItRsSkR5G6lov60C6Gn3Kt6mG00AeGVQ8hU';

    const { currentUser } = useSelector((state) => state.user);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();

    const onToken = (token) => {
        setStripeToken(token);
    }
    console.log("StripeToken", stripeToken);

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
        }
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, history]);

    const handleRemoveFromCart = (product) => {
        // can remove only if the user is currently logged in
        removeFromCart(dispatch, currentUser?._id, product);
    }

    return (
        <>
            <Navbar />
            <div className="container cart-container d-flex justify-content-between">
                <div className="row w-100 mx-auto">
                    {
                        cart.products.map(product => (
                            <div className="col-sm-10 col-md-12 col-lg-10 mb-4 shadow">
                                <div className="p-4">
                                    <h4 className="pb-3 font-weight-bold">Cart ({cart.count} Items)</h4>
                                    <div className="row">
                                        <div className="col-md-7 col-11 mx-auto d-flex justify-content-center align-items-center shadow">
                                            <img src={product.image.url} className="cart-img img-fluid" alt="" />
                                        </div>
                                        <div className="cart-product-info col-md-5 px-5 my-auto">
                                            <h5 className="mb-2">{product.name}</h5>
                                            <h6 className="text-capitalize my-3">
                                                color : <span className="d-inline-block products-color products-color-red"></span>
                                            </h6>
                                            <h6 className="text-capitalize my-3">
                                                price : <span>Rs {product.price}</span>
                                            </h6>
                                            <div className="d-flex">
                                                <Remove style={{ cursor: 'pointer' }} />
                                                <span className="text-capitalize number">{product.quantity}</span>
                                                <Add style={{ cursor: 'pointer' }} />
                                            </div>
                                            <div className="col d-flex justify-content-end">
                                                <button className="btn remove-btn text-capitalize w-100 mt-4" onClick={() => handleRemoveFromCart(product)}>remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="summary-container">
                    <div className="mt-lg-0 mt-md-5 mb-5 order-summary">
                        <div className="p-4 shadow bg-white">
                            <h3 className="text-uppercase mb-5">order summary</h3>
                            <div className="d-flex justify-content-between">
                                <p>Amount</p>
                                <p>Rs <span>{cart.total}</span></p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Estimated Shipping</p>
                                <p>Rs <span>30.0</span></p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p>Shipping Discount</p>
                                <p>Rs <span> -30.0</span></p>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between total">
                                <p>Total</p>
                                <p>Rs <span>{cart.total}</span></p>
                            </div>
                            <div className="col d-flex justify-content-end">
                                {/* <StripeCheckout
                                    name="FERNITOR"
                                    image="/img/logo.png"
                                    billingAddress
                                    description={`Your total is Rs ${cart.total}`}
                                    amount={cart.total * 100}
                                    token={onToken}
                                    stripeKey={KEY}>
                                </StripeCheckout> */}
                                <button className="btn checkout-btn text-uppercase">
                                    checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart