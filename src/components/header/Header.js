import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header
            id="header"
            className="vh-100 carousel slide"
            data-bs-ride="carousel"
            style={{ paddingTop: '104px' }}>
            <div className="container h-100 d-flex align-items-center carousel-inner">
                <div className="text-center carousel-item active">
                    <h2 className="text-capitalize text-white">best collection</h2>
                    <h1 className="text-uppercase text-white">new arrivals</h1>
                    <Link to="/">
                        <div className="btn mt-4 text-uppercase">shop now</div>
                    </Link>
                </div>
                <div className="text-center carousel-item">
                    <h2 className="text-capitalize text-white">best price & offer</h2>
                    <h1 className="text-uppercase py-2 text-white">new season</h1>
                    <Link to="/">
                        <div className="btn mt-2 text-uppercase">buy now</div>
                    </Link>
                </div>
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#header"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#header"
                data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </header>
    )
}

export default Header
