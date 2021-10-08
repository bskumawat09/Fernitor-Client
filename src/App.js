import './App.css'
import Home from "./pages/Home"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Register from "./pages/Register"
import About from './pages/about/About'
import Explore from './pages/explore/Explore'
import Shop from './pages/shop/Shop'
import Success from "./pages/Success"

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import { useSelector } from "react-redux"

function App() {
	const user = useSelector((state) => state.user.currentUser);

	return (
		<Router>
			<Switch>
				<Route path="/products/:category">
					<Shop />
				</Route>
				<Route path="/products">
					<Shop />
				</Route>
				<Route path="/product/:pid">
					<Product />
				</Route>
				<Route path="/shop">
					<Explore />
				</Route>
				<Route path="/cart">
					<Cart />
				</Route>
				<Route path="/success">
					<Success />
				</Route>
				<Route path="/login">
					{user ? <Redirect to="/" /> : <Login />}
				</Route>
				<Route path="/register">
					{user ? <Redirect to="/" /> : <Register />}
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
