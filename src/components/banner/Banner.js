import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
	return (
		<section id="offers" className="container py-md-3 mt-4">
			{/* <div className="container"> */}
			<div className="row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start">
				<div className="offers-content">
					<span>Discount Up To 40%</span>
					<h3 className="mb-4">Grand Diwali Offer!</h3>
					<Link to="/">
						<div className="btn">Buy Now</div>
					</Link>
				</div>
			</div>
			{/* </div> */}
		</section>
	);
};

export default Banner;
