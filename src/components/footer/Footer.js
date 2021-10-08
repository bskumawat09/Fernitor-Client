import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Twitter,
    Room,
    LinkedIn,
    YouTube
} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="bg-dark py-5">
            <div className="container">
                <div className="row text-white g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="text-uppercase text-decoration-none brand text-white">Fernitor</div>
                        <p className="text-white text-muted mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            mollitia quisquam veniam odit cupiditate, ullam aut voluptas velit
                            dolor ipsam.
                        </p>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <h5 className="fw-light">Links</h5>
                        <ul className="list-unstyled">
                            <li className="my-3">
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <div className="text-white text-decoration-none text-muted mLink">
                                        Home
                                    </div>
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link to="/shop" style={{ textDecoration: 'none' }}>
                                    <div className="text-white text-decoration-none text-muted mLink">
                                        Shop
                                    </div>
                                </Link>
                            </li>
                            <li className="my-3">
                                <Link to="/about" style={{ textDecoration: 'none' }}>
                                    <div className="text-white text-decoration-none text-muted mLink">
                                        About Us
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <h5 className="fw-light mb-3">Contact Us</h5>
                        <div
                            className="d-flex justify-content-start align-items-start my-2 text-muted">
                            <Room className="me-2" />
                            <span className="fw-light">
                                Dindayal Upadhyay Marg, New Delhi pin-543210, India
                            </span>
                        </div>
                        <div
                            className="d-flex justify-content-start align-items-start my-2 text-muted">
                            <MailOutline className="me-2" />
                            <span className="fw-light">
                                fernitor.support@gmail.com
                            </span>
                        </div>
                        <div
                            className="d-flex justify-content-start align-items-start my-2 text-muted">
                            <Phone className="me-2" />
                            <span className="fw-light">
                                +1234 5678 910
                            </span>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <h5 className="fw-light mb-3">Follow Us</h5>
                        <div>
                            <ul className="list-unstyled d-flex">
                                <li>
                                    <div className="text-white text-decoration-none text-muted fs-4 me-4">
                                        <Facebook />
                                    </div>
                                </li>
                                <li>
                                    <div className="text-white text-decoration-none text-muted fs-4 me-4">
                                        <Twitter />
                                    </div>
                                </li>
                                <li>
                                    <div className="text-white text-decoration-none text-muted fs-4 me-4">
                                        <Instagram />
                                    </div>
                                </li>
                                <li>
                                    <div className="text-white text-decoration-none text-muted fs-4 me-4">
                                        <LinkedIn />
                                    </div>
                                </li>
                                <li>
                                    <div className="text-white text-decoration-none text-muted fs-4 me-4">
                                        <YouTube />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
