import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Exercises from "./components/Exercises";

//TODO: Make sure to add all of the routes here 
export default function RoutesPage() {
	return (
		<Routes>
			<Route exact path='/' element={<LoginPage />} />
			<Route exact path='/home' element={<Home />} />
			<Route exact path='/exercises' element={<Exercises />} />
			<Route exact path='*' element={<ErrorPage />} />
		</Routes>
		
	);
}
