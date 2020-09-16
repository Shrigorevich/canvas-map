import { Box, Grid } from "@material-ui/core";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SkinOverview from "../components/SkinOverview";

const Skin = (props) => {
    return (
        <div>
            <Header />
            <SkinOverview id={props.match.params.id} />
            <Footer />
        </div>
    );
};

export default Skin;
