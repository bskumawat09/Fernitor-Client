import { useEffect, useState } from "react"
import { publicRequest } from "../../requestMethods"
import Product from '../product/Product'

const Products = ({ cat, featured, sort, limit }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                let response;
                if (featured) {
                    response = await publicRequest.get("/products?isFeatured=true");
                } else if (sort) {
                    switch (sort) {
                        case "asc":
                            response = await publicRequest.get("/products?sort=asc");
                            break;
                        case "desc":
                            response = await publicRequest.get("/products?sort=desc");
                            break;
                        default:
                            response = await publicRequest.get("/products?sort=new");
                    }
                } else {
                    response = await publicRequest.get(cat ? `/products?category=${cat}` : "/products");
                }

                if (limit) {
                    response.data.results = limit;
                    response.data.products = response.data.products.slice(0, limit);
                }

                // console.log("ProductsRes", response.data);
                setProducts(response.data.products);
            } catch (err) {
                console.log("ERROR", err);
            }
        }
        getProducts();
    }, [cat, featured, sort, limit]);

    return (
        <div class="row">
            {
                products.map((item) => (
                    <Product item={item} key={item._id} />
                ))
            }
        </div>
    )
}

export default Products
