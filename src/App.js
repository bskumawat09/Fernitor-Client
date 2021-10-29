import "./App.css";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Explore from "./pages/explore/Explore";
import Cart from "./pages/cart/Cart";
import About from "./pages/about/About";
import Success from "./pages/Success";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/shop/:cat">
					<Explore />
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
