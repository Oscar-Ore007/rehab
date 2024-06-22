import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Exercises from "./components/Exercises";
import CreateExercise from "./components/pages/CreateExercise";
import ShowExercise from "./components/pages/ShowExercise"
import EditExercise from "./components/pages/EditExercise"
import DeleteExercise from "./components/pages/DeleteExercise"


export default function RoutesPage() {
	return (
		<Routes>
			<Route exact path='/' element={<LoginPage />} />
			<Route exact path='/home' element={<Home />} />
			<Route exact path='/exercises' element={<Exercises />} />
			<Route exact path='/exercises/create' element={<CreateExercise />} /> 
			<Route exact path='/exercises/detail/:id' element={<ShowExercise />} /> 
			<Route exact path='/exercises/edit/:id' element={<EditExercise />} /> 
			<Route exact path='/exercises/delete/:id' element={<DeleteExercise /> } /> 
			<Route exact path='*' element={<ErrorPage />} />
		</Routes>
		
	);
}
