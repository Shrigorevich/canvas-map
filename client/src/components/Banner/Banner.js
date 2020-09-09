import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
    TextField,
    Grid,
    Box,
    Button,
    Link,
    Container,
    Paper,
    Typography,
} from "@material-ui/core";
import Image from "./../../images/img2.jpg";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.primary.textWhite,
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        margin: "64px 0 0 0",
    },

    bannerContent: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px 0 24px 0",
        position: "relative",
    },

    firstServerPreview: {
        padding: "16px",
        textAlign: "right",
    },
    secondServerPreview: {
        padding: "16px",
        textAlign: "left",
    },

    serverDescription: {
        margin: "8px 0 16px 0",
    },
}));

const Header = (props) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Container className={classes.bannerContent}>
                <div className={classes.overlay}></div>
                <Grid container justify="center" alignItems="center">
                    <Grid item className={classes.firstServerPreview} xs={6}>
                        <Box>
                            <Typography variant="h5">First server</Typography>
                            <Typography className={classes.serverDescription}>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here, content here', making it look
                                like readable English.
                            </Typography>
                        </Box>
                        <Button variant="contained" color={"primary"}>
                            Join first
                        </Button>
                    </Grid>
                    <Grid item className={classes.secondServerPreview} xs={6}>
                        <Box>
                            <Typography variant="h5">Second server</Typography>
                            <Typography className={classes.serverDescription}>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here, content here', making it look
                                like readable English.
                            </Typography>
                        </Box>
                        <Button variant="contained" color={"secondary"}>
                            Join second
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};

const mapStateToProps = (state) => {
    return {
        regions: {},
    };
};

export default connect(mapStateToProps, null)(Header);
