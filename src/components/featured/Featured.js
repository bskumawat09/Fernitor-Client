import "./Featured.css";
import { Divider } from "@mui/material";
import Carousel from "react-multi-carousel";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import Product from "../product/Product";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 4,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 3,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 2,
		slidesToSlide: 1,
	},
};

const Featured = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await publicRequest.get(`/products?isFeatured=true`);
				console.log("ProductsRes", response.data);
				setProducts(response.data.products);
			} catch (err) {
				console.log("ERROR", err);
			}
		};
		getProducts();
	}, []);

	return (
		<section id="featured" className="mt-4 py-3">
			<div className="container">
				<div className="title text-center">
					<h3 className="position-relative d-inline-block">
						Featured Products
					</h3>
				</div>
				<Divider />
				<Carousel
					responsive={responsive}
					infinite={true}
					autoPlay={true}
					containerClass="my-3"
					sliderClass=""
					removeArrowOnDeviceType={["mobile"]}>
					{products.map((item) => (
						<div className="px-2">
							<Product item={item} key={item._id} />
						</div>
					))}
				</Carousel>
			</div>
		</section>
	);
};

export default Featured;
