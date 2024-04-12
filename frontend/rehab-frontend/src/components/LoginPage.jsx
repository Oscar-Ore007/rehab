import { Paper, TextField, Typography, Box, Button } from "@mui/material";

export default function LoginPage() {
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
			<TextField
				placeholder='Enter Email'
				type='email'
				sx={{ width: "300px" }}
			></TextField>
			<br></br>
			<br></br>
			<TextField
				placeholder='Enter Password'
				type='password'
				sx={{ width: "300px" }}
			></TextField>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Button
					sx={{
						backgroundColor: "blue",
						color: "white",
						margin: 1
					}}
				>
					Submit
				</Button>
				<Button
					sx={{
						backgroundColor: "blue",
						color: "white",
						margin: 1
					}}
				>
					Clear
				</Button>
			</Box>
		</Paper>
	);
}
