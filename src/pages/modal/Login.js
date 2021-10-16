import { Button, Modal, TextField } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../../redux/apiCalls"
import "./Login.css"

const Login = ({ openLogin, handleCloseLogin }) => {
	const [email, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const dispatch = useDispatch()

	const handleLogin = (e) => {
		e.preventDefault()
		login(dispatch, { email, password })
		handleCloseLogin()
	}

	return (
		<Modal
			open={openLogin}
			onClose={handleCloseLogin}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description">
			<div className="modal-container">
				<img
					src="https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
					alt=""
					className="login-form-img"
				/>
				<form className="login-form" autoComplete="off">
					<div className="form-input">
						<div className="form-item">
							<TextField
								id="standard-basic"
								label="Email"
								variant="standard"
								size="small"
								type="email"
								fullWidth
								onChange={(e) => setUsername(e.target.value)}
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
						<Button
							variant="outlined"
							color="primary"
							sx={{ width: "100%" }}
							onClick={handleLogin}>
							Login
						</Button>
					</div>
					<div className="alter-text">Create new account</div>
				</form>
			</div>
		</Modal>
	)
}
export default Login
