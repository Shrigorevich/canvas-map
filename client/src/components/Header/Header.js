import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
    TextField,
    Grid,
    Box,
    Button,
    Link,
    AppBar,
    Container,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import theme from "../theme";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.textWhite,
    },
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    navItem: {
        fontSize: "1.2rem",
        margin: "0 8px 0 8px",
        color: theme.palette.primary.textWhite,
        textDecoration: "none",
    },
    btn: {
        margin: "0 8px 0 8px",
    },
}));

const Header = (props) => {
    const classes = useStyles();

    return (
        <AppBar className={classes.root}>
            <Container>
                <Box className={classes.navbar}>
                    <Typography variant="h6">KingsCraft RP</Typography>
                    <Toolbar>
                        <Typography
                            component={NavLink}
                            className={classes.navItem}
                            to="/"
                        >
                            Главная
                        </Typography>
                        <Typography
                            component={NavLink}
                            className={classes.navItem}
                            to="/about-us"
                        >
                            О проекте
                        </Typography>
                        <Typography
                            component={NavLink}
                            className={classes.navItem}
                            to="#"
                        >
                            Форум
                        </Typography>
                        <Typography
                            component={NavLink}
                            className={classes.navItem}
                            to="#"
                        >
                            Магазин
                        </Typography>
                        <Button className={classes.btn} variant="outlined">
                            Log In
                        </Button>
                        <Button className={classes.btn} variant="contained">
                            Sign Up
                        </Button>
                    </Toolbar>
                </Box>
            </Container>
        </AppBar>
    );
};

const mapStateToProps = (state) => {
    return {
        regions: {},
    };
};

export default connect(mapStateToProps, null)(Header);
