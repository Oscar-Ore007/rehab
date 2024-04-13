import { Paper, TextField, Typography, Box, Button } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useState } from "react";

export default function LoginPage() {
	const [password, setPassword] = useState();
	const [email, setEmail] = useState();

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!email || !password) {
			alert("Please fill out all fields");
			return;
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
					required
					onChange={(e) => setEmail(e.target.value)}
					sx={{ width: "300px" }}
				></TextField>
				<br></br>
				<br></br>
				<TextField
					placeholder='Enter Password'
					type='password'
					value={password}
					required
					onChange={(e) => setPassword(e.target.value)}
					sx={{ width: "300px" }}
				></TextField>
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
						type="submit"
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
						}}
					>
						Clear
					</Button>
				</Box>
			</form>
		</Paper>
	);
}
