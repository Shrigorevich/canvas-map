import React from "react";
import { connect, useDispatch } from "react-redux";
import VideoApi from "./VideoApi";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 8px 0 16px",
    },
}));

const VideoWrapper = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <VideoApi
                title={props.title}
                link={"1fDQOhc8fv8"}
                width="100%"
                height="400px"
            />
        </Box>
    );
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, null)(VideoWrapper);
