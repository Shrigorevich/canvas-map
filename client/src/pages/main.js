import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchRegions } from "./../redux/actions";
import Dashboard from "./../components/Dashboard";

const Main = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRegions());
    }, []);

    return props.regions.civilian_sites ? <Dashboard /> : null;
};

const mapStateToProps = (state) => {
    return {
        regions: {
            civilian_sites: state.map.regions?.civilian_sites,
            admin_sites: state.map.regions?.admin_sites,
        },
    };
};

export default connect(mapStateToProps, null)(Main);
