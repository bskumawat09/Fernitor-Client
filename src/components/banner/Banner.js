import { Link } from 'react-router-dom'
import './Banner.css'

const Banner = () => {
    return (
        <section id="offers" className="py-5">
            <div className="container">
                <div
                    className="row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start">
                    <div className="offers-content">
                        <span>Discount Up To 40%</span>
                        <h2 className="mb-4">Grand Sale Offer!</h2>
                        <Link to="/">
                            <div className="btn">Buy Now</div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
