import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";

export default function RoutesPage() {
	return (
		<Routes>
			<Route exact path='/' element={<LoginPage />} />
			<Route exact path='/home' element={<Home />} />
			<Route exact path='*' element={<ErrorPage />} />
		</Routes>
	);
}
