import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import VideoApi from "../components/YouTube/VideoApi";
import VideoWrapper from "../components/YouTube/VideoWrapper";
import { Box, Grid, Typography, Divider } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import theme from "../components/theme";

const useStyles = makeStyles((theme) => ({
    root: {},
    divider: {
        backgroundColor: "#000",
    },
    dividerWrapper: {
        display: "flex",
        alignItems: "center",
    },
}));

const AboutUs = (props) => {
    const classes = useStyles();

    return (
        <div className="home-wrapper">
            <Header />
            <VideoWrapper />
            <Box my={2}></Box>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, null)(AboutUs);
