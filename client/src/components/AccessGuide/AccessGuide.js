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
        margin: "24px 0 24px 0",
    },
    title: {
        margin: "0 0 16px 0",
        textAlign: "center",
    },

    guideStep: {
        padding: "16px",
    },

    stepDescription: {
        color: theme.palette.secondary.text,
    },
}));

const AccessGuide = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Container>
                <Typography className={classes.title} variant="h4">
                    Как попасть на сервер
                </Typography>
                <Grid container className={classes.guide}>
                    <Grid item xs={10}>
                        <Box boxShadow={1} className={classes.guideStep}>
                            <Typography variant="h6">Step 1</Typography>
                            <Typography className={classes.stepDescription}>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here, content here', making it look
                                like readable English.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={10}>
                        <Box boxShadow={1} className={classes.guideStep}>
                            <Typography variant="h6">Step 2</Typography>
                            <Typography className={classes.stepDescription}>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here, content here', making it look
                                like readable English. Many desktop publishing
                                packages and web page editors now use Lorem
                                Ipsum as their default model text, and a search
                                for 'lorem ipsum' will uncover many web sites
                                still in their infancy. Various versions have
                                evolved over the years, sometimes by accident,
                                sometimes on purpose (injected humour and the
                                like).
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={10}>
                        <Box boxShadow={1} className={classes.guideStep}>
                            <Typography variant="h6">Step 3</Typography>
                            <Typography className={classes.stepDescription}>
                                The point of using Lorem Ipsum is that it has a
                                more-or-less normal distribution of letters, as
                                opposed to using 'Content here, content here',
                                making it look like readable English. Many
                                desktop publishing packages and web page editors
                                now use Lorem Ipsum as their default model text,
                                and a search for 'lorem ipsum' will uncover many
                                web sites still in their infancy. Various
                                versions have evolved over the years, sometimes
                                by accident, sometimes on purpose (injected
                                humour and the like).
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={10}>
                        <Box boxShadow={1} className={classes.guideStep}>
                            <Typography variant="h6">Step 4</Typography>
                            <Typography className={classes.stepDescription}>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here, content here', making it look
                                like readable English.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

const mapStateToProps = (state) => {
    return {
        regions: {},
    };
};

export default connect(mapStateToProps, null)(AccessGuide);
