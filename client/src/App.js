import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/Profile" element={<Profile />}></Route>
				<Route path="/Login" element={<Login />}></Route>
				<Route path="/Register" element={<Register />}></Route>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
