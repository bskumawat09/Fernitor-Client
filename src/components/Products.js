import styled from 'styled-components'
import Product from './Product'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ cat }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");
                // console.log("ProductsResponse", response.data);
                setProducts(response.data.products);
            } catch (err) {
                console.log("ERROR", err);
            }
        }
        getProducts();
    }, [cat]);

    return (
        <Container>
            {
                products.map((item) => (
                    <Product item={item} key={item._id} />)
                )
            }
        </Container>
    )
}

export default Products
