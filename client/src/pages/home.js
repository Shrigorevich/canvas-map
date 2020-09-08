import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import AccessGuide from "../components/AccessGuide/AccessGuide";
import Footer from "../components/Footer/Footer";

const Home = (props) => {
    const dispatch = useDispatch();

    return (
        <div className="home-wrapper">
            <Header />
            <Banner />
            <AccessGuide />
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, null)(Home);
