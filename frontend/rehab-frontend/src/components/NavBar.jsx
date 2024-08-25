import { Link } from "react-router-dom"; 

export default function NavBar() {
	return (
		<div>
			<nav>
				<Link to='/about'>About</Link> |
				<Link to='/exercises'>Exercises</Link> |
				<Link to='/contact'>Contact</Link>
			</nav>
		</div>
	);
}
