import "./Featured.css";
import Products from "../products/Products";
import { useParams } from "react-router";
import { Divider } from "@mui/material";

const Featured = () => {
	const { category } = useParams();

	return (
		<section id="featured" className="mt-4 py-3">
			<div className="container">
				<div className="title text-center">
					<h3 className="position-relative d-inline-block">
						Featured Products
					</h3>
				</div>
				<Divider />
				<Products cat={category} featured={true} />
			</div>
		</section>
	);
};

export default Featured;
