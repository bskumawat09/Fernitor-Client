import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Register from "./pages/Register"

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Success from "./pages/Success"
import { useSelector } from "react-redux"

function App() {
	const user = useSelector((state) => state.user.currentUser);

	return (
		<Router>
			<Switch>
				<Route path="/products/:category">
					<ProductList />
				</Route>
				<Route path="/product/:pid">
					<Product />
				</Route>
				<Route path="/products">
					<ProductList />
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
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
