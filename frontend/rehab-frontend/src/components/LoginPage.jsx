import { Paper, TextField, Typography, Box, Button } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useState } from "react";
import { useNavigate } from "react-router";

//TODO: Add JWT tokens authenication that way the user can stay logged in for a certain amount of time

export default function LoginPage() {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		setError("");

		if (!email && !password) {
			setError("Please fill out both email and password fields");
		} else if (!email) {
			setError("Please enter your email");
		} else if (!password) {
			setError("Please enter your password");
		} else {
			navigate("/home");
		}
	};

	return (
		<Paper
			sx={{
				width: "600px",
				height: "600px",
			}}
		>
			<Typography
				sx={{
					textAlign: "center",
					padding: 5,
					margin: 1,
				}}
			>
				Welcome to Rehab!
			</Typography>
			<Box>
				<AccountBoxIcon fontSize='large' />
			</Box>
			<form onSubmit={handleSubmit}>
				<TextField
					placeholder='Enter Email'
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					sx={{ width: "300px" }}
				/>
				<br /><br />
				<TextField
					placeholder='Enter Password'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					sx={{ width: "300px" }}
				/>
				{error && (
					<Typography color="error" sx={{ mt: 2 }}>
						{error}
					</Typography>
				)}
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						margin: 1,
					}}
				>
					<Button
						sx={{
							backgroundColor: "green",
							color: "white",
							margin: 1,
						}}
						type='submit'
					>
						Submit
					</Button>
					<Button
						sx={{
							backgroundColor: "red",
							color: "white",
							margin: 1,
						}}
						type='button'
						onClick={() => {
							setEmail("");
							setPassword("");
							setError("");
						}}
					>
						Clear
					</Button>
				</Box>
			</form>
		</Paper>
	);
}