import React from "react";
import {
	AppBar,
	Avatar,
	Button,
	IconButton,
	Toolbar,
	Typography,
	Badge,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import pokebola from "../../assets/pokebola.jpg";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailIcon from "@material-ui/icons/Mail";
import AccountCircle from "@material-ui/icons/AccountCircle";

const styles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			background: "#673ab7",
			width: "100%",
		},
		title: {
			[theme.breakpoints.up("sm")]: {
				display: "block",
			},
		},
		avatar: {
			// marginLeft: theme.spacing(1),
		},
		routes: {
			// marginLeft: theme.spacing(15),
		},
	})
);

const Header = () => {
	const classes = styles();

	return (
		<div className={classes.root}>
			<AppBar position="relative">
				<Toolbar>
					<Typography className={classes.title} variant={"h6"}>
						LET'S POKEDEX
					</Typography>

					<Avatar className={classes.avatar} src={pokebola} />

					<div className={classes.root} />

					<Link to="/" style={{ textDecoration: "none", color: "white" }}>
						<Button color="inherit" className={classes.routes}>
							All pokemons
						</Button>
					</Link>

					<div className={classes.root} />

					<Link to="/stared" style={{ textDecoration: "none", color: "white" }}>
						<Button color="inherit" className={classes.routes}>
							Stared Pokemons
						</Button>
					</Link>

					<div className={classes.root} />

					<IconButton edge="end" aria-label="notifications" color="inherit">
						<Badge badgeContent={4} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton>

					<IconButton
						className={classes.avatar}
						aria-label="notifications"
						color="inherit"
					>
						<Badge badgeContent={4} color="secondary">
							<MailIcon />
						</Badge>
					</IconButton>

					<IconButton color="inherit" className={classes.avatar}>
						<AccountCircle />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
