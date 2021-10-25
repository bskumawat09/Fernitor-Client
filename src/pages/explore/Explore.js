import Products from "../../components/products/Products";
import { Link } from "react-router-dom";
import "./Explore.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
} from "@mui/material";

const Explore = () => {
	const [sort, setSort] = useState("new");
	const [category, setCategory] = useState("");

	const handleChange = (event) => {
		setCategory(event.target.value);
	};

	return (
		<>
			<Navbar />
			<div className="product-banner d-flex align-items-center justify-content-center text-center container">
				<div className="text-center">
					<h1 className="text-capitalize text-white">our products</h1>
				</div>
			</div>
			<div className="products">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-4 col-lg-3 mx-auto text-capitalize my-3 p-4 bg-white">
							<div className="products-categories-title mb-4">
								<h6 className="text-uppercase">categories</h6>
								<div className="products-categories-underline"></div>
							</div>
							<FormControl component="fieldset">
								<RadioGroup
									aria-label="categories"
									defaultValue=""
									name="radio-buttons-group"
									onChange={handleChange}>
									<FormControlLabel
										value=""
										control={<Radio size="small" />}
										label="All"
									/>
									<FormControlLabel
										value="chair"
										control={<Radio size="small" />}
										label="Chair"
									/>
									<FormControlLabel
										value="sofa"
										control={<Radio size="small" />}
										label="Sofa"
									/>
									<FormControlLabel
										value="bed"
										control={<Radio size="small" />}
										label="Bed"
									/>
									<FormControlLabel
										value="storage"
										control={<Radio size="small" />}
										label="Storage"
									/>
								</RadioGroup>
							</FormControl>

							<div className="products-categories-title my-4">
								<h6 className="text-uppercase">sort by</h6>
								<div className="products-categories-underline"></div>
							</div>
							<div className="form-group">
								<select
									className="form-select text-capitalize"
									onChange={(e) => setSort(e.target.value)}>
									<option value="new">newest</option>
									<option value="asc">low to high (price)</option>
									<option value="desc">high to low (price)</option>
								</select>
							</div>
							<div className="products-categories-title my-4">
								<h6 className="text-uppercase">shop by color</h6>
								<div className="products-categories-underline"></div>
							</div>
							<Link to="/products">
								<div className="color">
									<p className="mb-0 text-capitalize">
										<span className="d-inline-block products-color products-color-black mr-2"></span>
										black(5)
									</p>
								</div>
							</Link>
							<Link to="/products">
								<div className="color">
									<p className="mb-0 text-capitalize">
										<span className="d-inline-block products-color products-color-white mr-2"></span>
										white(10)
									</p>
								</div>
							</Link>
							<Link to="/products">
								<div className="color">
									<p className="mb-0 text-capitalize">
										<span className="d-inline-block products-color products-color-brown mr-2"></span>
										brown(7)
									</p>
								</div>
							</Link>
						</div>
						<div className="col-12 col-md-8 col-lg-9 my-md-3">
							<Products sort={sort} cat={category} />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Explore;
