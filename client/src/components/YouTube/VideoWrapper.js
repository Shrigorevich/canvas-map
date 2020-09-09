import React from "react";
import { connect, useDispatch } from "react-redux";
import VideoApi from "./VideoApi";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "64px 0 0 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px 24px",
    },
}));

const VideoWrapper = (props) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={6}>
                <VideoApi
                    title={props.title}
                    link={"1fDQOhc8fv8"}
                    width="100%"
                    height="400px"
                />
            </Grid>
        </Grid>
    );
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, null)(VideoWrapper);
