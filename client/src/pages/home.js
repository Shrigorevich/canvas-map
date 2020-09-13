import React from "react";
import Features from "../components/Features.js";
import Footer from "../components/Footer.js";
import Guide from "../components/Guide.js";
import Start from "../components/Start.js";

const Home = (props) => {
    return (
        <div>
            <Start />
            <Features />
            <Guide />
            <Footer />
        </div>
    );
};

export default Home;
