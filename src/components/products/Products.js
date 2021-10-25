import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import Product from "../product/Product";

const Products = ({ cat, featured, sort, limit }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				let queries = "";
				cat && (queries += `&category=${cat}`);
				featured && (queries += "&isFeatured=true");
				sort && (queries += `&sort=${sort}`);

				queries = queries.slice(1);
				// console.log("Queries", queries);
				const response = await publicRequest.get(`/products?${queries}`);
				// console.log("ProductsRes", response.data);

				if (limit) {
					response.data.results = limit;
					response.data.products = response.data.products.slice(0, limit);
				}

				setProducts(response.data.products);
			} catch (err) {
				console.log("ERROR", err);
			}
		};
		getProducts();
	}, [cat, featured, sort, limit]);

	return (
		<div class="row g-3">
			{products.map((item) => (
				<div className="col-6 col-sm-4">
					<div className="bg-white">
						<Product item={item} key={item._id} />
					</div>
				</div>
			))}
		</div>
	);
};

export default Products;
