import { Link } from "react-router-dom"; // Assuming you're using React Router

export default function NavBar() {
	return (
		<div>
			<nav>
				<Link to='/'>Home</Link> |
				<Link to='/about'>About</Link> |
				<Link to='/exercises'>Exercises</Link> |
				<Link to='/contact'>Contact</Link>
			</nav>
		</div>
	);
}
