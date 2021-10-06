import { useEffect, useState } from "react"
import { publicRequest } from "../../requestMethods"
import Product from '../product/Product'

const Products = ({ cat, featured }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                let response;
                if (featured) {
                    response = await publicRequest.get(cat ? `/products?isFeatured=true&category=${cat}` : "/products?isFeatured=true");
                } else {
                    response = await publicRequest.get(cat ? `/products?category=${cat}` : "/products");
                }
                // console.log("ProductsResponse", response.data);
                setProducts(response.data.products);
            } catch (err) {
                console.log("ERROR", err);
            }
        }
        getProducts();
    }, [cat, featured]);

    return (
        <>
            {
                products.map((item) => (
                    <Product item={item} key={item._id} />
                ))
            }
        </>
    )
}

export default Products
