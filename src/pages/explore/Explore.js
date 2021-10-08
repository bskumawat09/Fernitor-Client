import Products from "../../components/products/Products"
import { Link } from "react-router-dom"
import './Explore.css'
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { useState } from "react"

const Explore = () => {
    const [sort, setSort] = useState("newest");

    return (
        <>
            <Navbar />
            <div
                class="product-banner d-flex align-items-center justify-content-center text-center">
                <div class="text-center">
                    <h1 class="text-capitalize text-white">our products</h1>
                </div>
            </div>
            <div className="products">
                <div className="container-fluid">
                    <div className="row">
                        <div
                            className="col-10 col-md-4 col-lg-3 mx-auto text-capitalize my-3 px-5">
                            <div className="products-categories-title my-4">
                                <h6 className="text-uppercase">shop by categories</h6>
                                <div className="products-categories-underline"></div>
                            </div>
                            <Link to="/products" style={{ textDecoration: 'none' }}>
                                <div className="d-block products-categories-link">
                                    <p className="mb-0">all</p>
                                </div>
                            </Link>
                            <Link to="/products/chair" style={{ textDecoration: 'none' }}>
                                <div className="d-block products-categories-link">
                                    <p className="mb-0">chairs</p>
                                </div>
                            </Link>
                            <Link to="/products/sofa" style={{ textDecoration: 'none' }}>
                                <div className="d-block products-categories-link">
                                    <p className="mb-0">sofas</p>
                                </div>
                            </Link>
                            <Link to="/products/bed" style={{ textDecoration: 'none' }}>
                                <div className="d-block products-categories-link">
                                    <p className="mb-0">beds</p>
                                </div>
                            </Link>
                            <Link to="/products/desk" style={{ textDecoration: 'none' }}>
                                <div className="d-block products-categories-link">
                                    <p className="mb-0">desks</p>
                                </div>
                            </Link>

                            <div className="products-categories-title my-4">
                                <h6 className="text-uppercase">shop by price</h6>
                                <div className="products-categories-underline"></div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price order" className="form-label">sort by</label>
                                <select className="form-select text-capitalize" onChange={e => setSort(e.target.value)}>
                                    <option value="newest">newest</option>
                                    <option value="asc">low to high (price)</option>
                                    <option value="desc">high to low (price)</option>
                                </select>
                            </div>
                            <div className="products-categories-title my-4">
                                <h6 className="text-uppercase">shop by color</h6>
                                <div className="products-categories-underline"></div>
                            </div>
                            <Link to="/products" style={{ textDecoration: 'none' }}>
                                <div className="color">
                                    <p className="mb-0 text-capitalize">
                                        <span className="d-inline-block products-color products-color-black mr-2">
                                        </span>black(5)
                                    </p>
                                </div>
                            </Link>
                            <Link to="/products" style={{ textDecoration: 'none' }}>
                                <div className="color">
                                    <p className="mb-0 text-capitalize">
                                        <span className="d-inline-block products-color products-color-white mr-2">
                                        </span>white(10)
                                    </p>
                                </div>
                            </Link>
                            <Link to="/products" style={{ textDecoration: 'none' }}>
                                <div className="color">
                                    <p className="mb-0 text-capitalize">
                                        <span className="d-inline-block products-color products-color-brown mr-2">
                                        </span>brown(7)
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div class="col-10 col-md-8 col-lg-9 my-3">
                            <Products sort={sort} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Explore
