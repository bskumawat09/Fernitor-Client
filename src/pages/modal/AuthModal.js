import { Close } from "@mui/icons-material";
import { Button, MenuItem, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countries } from "../../data";
import { login, register } from "../../redux/apiCalls";
import "./AuthModal.css";

const loginInitialValues = {
	email: "",
	password: "",
};

const signupInitialValues = {
	name: "",
	email: "",
	password: "",
	phone: "",
	country: "",
};

const modalInitialValues = {
	login: {
		view: "login",
		src: "https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
	},
	signup: {
		view: "signup",
		src: "https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_12Oct.jpg",
	},
};

const AuthModal = ({ open, handleClose }) => {
	const user = useSelector((state) => state.user.currentUser);

	const [loginInputs, setLoginInputs] = useState(loginInitialValues);
	const [signupInputs, setSignupInputs] = useState(signupInitialValues);
	const [error, showError] = useState(false);
	const [frame, setFrame] = useState(modalInitialValues.login);
	const dispatch = useDispatch();

	const onLoginInputChange = (e) => {
		setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });
	};

	const onSignupInputChange = (e) => {
		setSignupInputs({ ...signupInputs, [e.target.name]: e.target.value });
	};

	const handleCloseModal = () => {
		handleClose();
		showError(false);
		toggleModal("login");
	};

	const toggleModal = (val) => {
		if (val === "login") {
			setFrame(modalInitialValues.login);
		} else if (val === "signup") {
			setFrame(modalInitialValues.signup);
		}
		showError(false);
	};

	const handleLogin = (e) => {
		e.preventDefault();
		console.log("LoginInputs", loginInputs);
		login(dispatch, loginInputs);
		user ? handleCloseModal() : showError(true);
	};

	const handleRegister = (e) => {
		e.preventDefault();
		register(dispatch, signupInputs);
		user ? handleCloseModal() : showError(true);
	};

	return (
		<Modal
			open={open}
			onClose={handleCloseModal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description">
			<div className="modal-container">
				<img
					src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_12Oct.jpg"
					alt=""
					className="login-form-img"
				/>
				<div className="close-btn">
					<Close onClick={handleCloseModal} />
				</div>
				{frame.view === "login" ? (
					<form className="login-form" autoComplete="off">
						<div className="form-input">
							<div className="form-item">
								<TextField
									id="standard-basic"
									label="Email"
									name="email"
									variant="standard"
									size="small"
									type="email"
									fullWidth
									onChange={(e) => onLoginInputChange(e)}
								/>
							</div>
							<div className="form-item">
								<TextField
									id="standard-password-input"
									label="Password"
									name="password"
									type="password"
									size="small"
									autoComplete="current-password"
									variant="standard"
									fullWidth
									onChange={(e) => onLoginInputChange(e)}
								/>
							</div>
							<Button
								variant="outlined"
								color="primary"
								sx={{ width: "100%" }}
								onClick={handleLogin}>
								Login
							</Button>
							{error && (
								<span className="modal-error">
									Something went wrong, please try again
								</span>
							)}
						</div>
						<div className="alter-text" onClick={() => toggleModal("signup")}>
							Create new account
						</div>
					</form>
				) : (
					<form className="login-form" autoComplete="off">
						<div className="form-input">
							<div className="form-item">
								<TextField
									id="standard-basic"
									label="Name"
									name="name"
									variant="standard"
									size="small"
									type="text"
									fullWidth
									onChange={(e) => onSignupInputChange(e)}
								/>
							</div>
							<div className="form-item">
								<TextField
									id="standard-basic-email"
									label="Email"
									name="email"
									variant="standard"
									size="small"
									type="email"
									fullWidth
									onChange={(e) => onSignupInputChange(e)}
								/>
							</div>
							<div className="form-item">
								<TextField
									id="standard-password-input"
									label="Password"
									name="password"
									type="password"
									size="small"
									autoComplete="current-password"
									variant="standard"
									fullWidth
									onChange={(e) => onSignupInputChange(e)}
								/>
							</div>
							<div className="form-item">
								<TextField
									id="standard-basic-phone"
									label="Phone"
									name="phone"
									type="number"
									size="small"
									variant="standard"
									fullWidth
									onChange={(e) => onSignupInputChange(e)}
								/>
							</div>
							<div className="form-item">
								<TextField
									id="standard-select-currency"
									select
									label="Country"
									name="country"
									onChange={(e) => onSignupInputChange(e)}
									helperText="Please select your country"
									variant="standard"
									fullWidth>
									{countries.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
							</div>
							<Button
								variant="outlined"
								color="primary"
								sx={{ width: "100%" }}
								onClick={handleRegister}>
								Register
							</Button>
							{error && (
								<span className="modal-error">
									Something went wrong, please try again
								</span>
							)}
							<div>
								By registering you agree to our <b>Terms & Conditions</b>
							</div>
						</div>
						<div className="alter-text" onClick={() => toggleModal("login")}>
							Already have an account
						</div>
					</form>
				)}
			</div>
		</Modal>
	);
};

export default AuthModal;
