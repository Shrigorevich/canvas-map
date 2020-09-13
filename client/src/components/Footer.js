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
        backgroundColor: theme.palette.primary.text,
        padding: "24px",
    },

    footerContent: {
        color: theme.palette.secondary.text,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    footer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    socialIcon: {
        display: "flex",
        justifyContent: "center",
    },
}));

const Footer = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid container className={classes.footer}>
                <Grid item xs={4} className={classes.footerContent}>
                    <Box mb={1}>
                        <Typography variant="h5">Kings Craft RP</Typography>
                    </Box>
                    <Box mb={2}>
                        <Typography>
                            &#169; Copyright 2020. All rights reserverd.
                        </Typography>
                    </Box>
                    <Grid container className={classes.social}>
                        <Grid item xs={3} className={classes.socialIcon}>
                            <i className="fab fa-discord fa-lg"></i>
                        </Grid>
                        <Grid item xs={3} className={classes.socialIcon}>
                            <i className="fab fa-youtube fa-lg"></i>
                        </Grid>
                        <Grid item xs={3} className={classes.socialIcon}>
                            <i className="fab fa-telegram fa-lg"></i>
                        </Grid>
                        <Grid item xs={3} className={classes.socialIcon}>
                            <i className="fas fa-share-alt fa-lg"></i>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

const mapStateToProps = (state) => {
    return {
        regions: {},
    };
};

export default connect(mapStateToProps, null)(Footer);
