import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Grid, Box, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#212121",
        padding: "24px 48px",
    },

    toolbar: {
        justifyContent: "flex-end",
        color: "#757575",
        padding: "8px 0 0 0",
    },

    toolItem: {
        margin: "0 8px",
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
                <Grid item xs={6}>
                    <Box mb={1} color="#fff">
                        <Typography variant="h5">Kingdom Craft RP</Typography>
                    </Box>
                    <Box color="#757575">
                        <Typography>
                            &#169; Copyright 2020. All rights reserverd.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Toolbar className={classes.toolbar}>
                        <Typography className={classes.toolItem}>
                            <i className="fab fa-discord fa-lg"></i>
                        </Typography>
                        <Typography className={classes.toolItem}>
                            <i className="fab fa-youtube fa-lg"></i>
                        </Typography>
                        <Typography className={classes.toolItem}>
                            <i className="fab fa-telegram fa-lg"></i>
                        </Typography>
                        <Typography className={classes.toolItem}>
                            <i className="fas fa-share-alt fa-lg"></i>
                        </Typography>
                    </Toolbar>
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
