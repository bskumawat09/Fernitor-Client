import React, { useState } from "react";
import "./Navbar.css";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/apiCalls";
import AuthModal from "../../pages/modal/AuthModal";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const user = useSelector((state) => state.user.currentUser);
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const quantity = cart.count;

	const handleLogout = () => {
		logout(dispatch);
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white py-2 sticky-top">
			<div className="container">
				<div className="navbar-brand d-flex justify-content-between align-items-center order-lg-0">
					<img src="/img/logo.png" alt="site icon" />
					<span className="text-uppercase ms-2 fw-bold">Fernitor</span>
				</div>

				<div className="order-lg-2 nav-btns">
					{user ? (
						<button
							className="btn btn-sm ms-2 btn-pink-outline text-capitalize"
							onClick={handleLogout}>
							logout
						</button>
					) : (
						<>
							<button
								className="btn btn-sm ms-3 btn-pink-outline text-capitalize"
								onClick={handleOpen}>
								login
							</button>
						</>
					)}
					<Link to="/cart">
						<button type="button" className="btn ms-2 position-relative p-0">
							<Badge badgeContent={quantity} color="primary">
								<ShoppingCartOutlined />
							</Badge>
						</button>
					</Link>
				</div>

				<button
					className="navbar-toggler border-0 p-0"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navMenu">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse order-lg-1" id="navMenu">
					<ul className="navbar-nav mx-auto text-center">
						<li className="nav-item px-2 py-2">
							<Link to="/" style={{ textDecoration: "none" }}>
								<div className="nav-link text-uppercase text-dark">home</div>
							</Link>
						</li>
						<li className="nav-item px-2 py-2">
							<Link to="/shop" style={{ textDecoration: "none" }}>
								<div className="nav-link text-uppercase text-dark">shop</div>
							</Link>
						</li>
						<li className="nav-item px-2 py-2">
							<Link to="/about" style={{ textDecoration: "none" }}>
								<div className="nav-link text-uppercase text-dark">
									about us
								</div>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<AuthModal open={open} handleClose={handleClose} />
		</nav>
	);
};

export default Navbar;
