import { Button, MenuItem, Modal, TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "../../redux/apiCalls"
import "./Register.css"

const countries = [
	{
		value: "India",
		label: "India",
	},
	{
		value: "United States",
		label: "United States",
	},
	{
		value: "China",
		label: "China",
	},
	{
		value: "Japan",
		label: "Japan",
	},
	{
		value: "Russia",
		label: "Russia",
	},
]

const Register = ({ openRegister, handleCloseRegister }) => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [phone, setPhone] = useState("")
	const [address, setAddress] = useState("")
	const [country, setCountry] = useState("")
	const dispatch = useDispatch()

	const handleRegister = (e) => {
		e.preventDefault()
		register(dispatch, { name, email, password, phone, address, country })
	}

	return (
		<Modal
			open={openRegister}
			onClose={handleCloseRegister}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description">
			<div className="modal-container">
				<img
					src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_12Oct.jpg"
					alt=""
					className="login-form-img"
				/>
				<form className="register-form" autoComplete="off">
					<div className="form-input">
						<div className="form-item">
							<TextField
								id="standard-basic"
								label="Name"
								variant="standard"
								size="small"
								type="text"
								fullWidth
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="form-item">
							<TextField
								id="standard-basic-email"
								label="Email"
								variant="standard"
								size="small"
								type="email"
								fullWidth
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-item">
							<TextField
								id="standard-password-input"
								label="Password"
								type="password"
								size="small"
								autoComplete="current-password"
								variant="standard"
								fullWidth
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="form-item">
							<TextField
								id="standard-basic-phone"
								label="Phone"
								type="number"
								size="small"
								variant="standard"
								fullWidth
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>
						<div className="form-item">
							<TextField
								id="standard-select-currency"
								select
								label="Country"
								value={country}
								onChange={(e) => setCountry(e.target.value)}
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
						<div>
							By registering you agree to our <b>Terms & Conditions</b>
						</div>
					</div>
					<div className="alter-text">Already have an account</div>
				</form>
			</div>
		</Modal>
	)
}

export default Register
