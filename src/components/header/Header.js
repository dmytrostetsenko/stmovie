import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Box
					sx={{
						display: "flex",
						flexGrow: 1,
					}}
				>
					<Link
						style={{
							textDecoration: "none",
							color: "#EBEEF5",
						}}
						to="/"
					>
						<Typography
							variant="h6"
							noWrap
							component="span"
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "10px",
								fontFamily: "monospace",
								fontWeight: 700,
							}}
						>
							<img src={logo} alt="logo image" />
							STMOVIE
						</Typography>
					</Link>
				</Box>
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
