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
					textAlign: "flex-start",
					padding: 1,
				}}
			>
				Welcome to Rehab!
			</Typography>
			<TextField placeholder='Enter Email' type='email'></TextField>
			<br></br>
			<TextField placeholder='Enter Password' type='password'></TextField>
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
					}}
				>
					Submit
				</Button>
				<Button
					sx={{
						backgroundColor: "blue",
						color: "white",
					}}
				>
					Clear
				</Button>
			</Box>
		</Paper>
	);
}
