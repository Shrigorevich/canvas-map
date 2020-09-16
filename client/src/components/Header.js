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
import theme from "./theme";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.primary.textWhite,
        backgroundColor: theme.palette.background.main,
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
    toolbar: {
        padding: 0,
        margin: "0 -8px",
    },
    btn: {
        margin: "0 8px 0 8px",
    },
    active: {
        color: theme.palette.primary.main,
    },
}));

const Header = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container>
                <Box className={classes.navbar}>
                    <Typography variant="h6">KingsCraft RP</Typography>
                    <Toolbar className={classes.toolbar}>
                        <Typography
                            component={NavLink}
                            className={classes.navItem}
                            to="/"
                            exact
                        >
                            Главная
                        </Typography>
                        <Typography
                            component={NavLink}
                            className={classes.navItem}
                            to="#"
                        >
                            Королевство
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
                            activeClassName={classes.active}
                            to="/shop"
                        >
                            Магазин
                        </Typography>
                        <Button
                            className={classes.btn}
                            variant="outlined"
                            color="primary"
                        >
                            Log In
                        </Button>
                        <Button
                            className={classes.btn}
                            variant="contained"
                            color="secondary"
                        >
                            Sign Up
                        </Button>
                    </Toolbar>
                </Box>
            </Container>
        </Box>
    );
};

const mapStateToProps = (state) => {
    return {
        regions: {},
    };
};

export default connect(mapStateToProps, null)(Header);
