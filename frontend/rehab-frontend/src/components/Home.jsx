import NavBar from "./NavBar";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import { Box, Button } from '@mui/material';

//TODO: Fix this page so that the naviagation is on the left side of the page, not directly in the middle of the page


export default function Home() {
  return (
    <>
      <Link to='/' style={{ position: 'absolute', top: 0, left: 0, padding: '10px' }}>
        <HomeIcon sx={{ fontSize: 30 }} />
      </Link>
      <NavBar />
      <div>Welcome to the Rehab App, Dashboard</div>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          padding: '10px'
        }}
      >
        <Button>
          Log Out
        </Button>
      </Box>
    </>
  );
}
