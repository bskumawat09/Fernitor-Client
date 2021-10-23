import { categories } from "../../data";
import { Link } from "react-router-dom";
import "./Categories.css";
import { Divider } from "@mui/material";

const categoryItem = (item) => (
	<div className="category-item col-6 col-sm-4 col-lg-3">
		<img src={item.image} alt="" className="category-img" />
		<div className="category-name">
			<Link to={`/shop/${item.name.toLowerCase()}`}>
				<button className="category-btn">{item.name}</button>
			</Link>
		</div>
	</div>
);

const Categories = () => {
	return (
		<section id="categories" className="mt-4 pt-3">
			<div className="container">
				<div className="title text-center">
					<h3 className="position-relative d-inline-block">Top Categories</h3>
				</div>
				<Divider />
				<div className="row g-3 py-3">
					{categories.map((item) => categoryItem(item))}
				</div>
			</div>
		</section>
	);
};

export default Categories;
