import React from "react";
import { connect, useDispatch } from "react-redux";
import { Box, Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import theme from "./theme";
import { NavLink } from "react-router-dom";

import Image from "../images/bg.png";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
    root: {
        background: `url(${Image}) no-repeat center`,
        backgroundSize: "cover",
        color: theme.palette.primary.textWhite,
        height: "100vh",
    },
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    navItem: {
        fontSize: "1.1rem",
        margin: "0 8px 0 8px",
        color: theme.palette.primary.textWhite,
        textDecoration: "none",

        "&:hover": {
            color: "#FFA000",
        },
    },
    btn: {
        margin: "0 8px 0 8px",
    },
    toolbar: {
        padding: "0",
    },
    logo: {
        fontSize: "1.4rem",
    },

    rootContent: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "calc(100% - 64px)",
    },

    title: {
        fontSize: "56px",
    },

    slogan: {
        fontSize: "28px",
        margin: "0 0 16px 0",
    },
}));

const Start = (props) => {
    const classes = useStyles();

    return (
        // <Container className={classes.navbar}>
        //         <Typography variant="h5">Kingdom Craft</Typography>
        //         <Toolbar className={classes.toolbar}>
        //             <Typography
        //                 component={NavLink}
        //                 className={classes.navItem}
        //                 to="/"
        //             >
        //                 ГЛАВНАЯ
        //             </Typography>
        //             <Typography
        //                 component={NavLink}
        //                 className={classes.navItem}
        //                 to="#"
        //             >
        //                 О НАС
        //             </Typography>
        //             <Typography
        //                 component={NavLink}
        //                 className={classes.navItem}
        //                 to="#"
        //             >
        //                 КОРОЛЕВСТВО
        //             </Typography>
        //             <Typography
        //                 component={NavLink}
        //                 className={classes.navItem}
        //                 to="/shop"
        //             >
        //                 МАГАЗИН
        //             </Typography>
        //             <Button
        //                 className={classes.btn}
        //                 variant="outlined"
        //                 color="secondary"
        //             >
        //                 Log In
        //             </Button>
        //         </Toolbar>
        //     </Container>
        <Box className={classes.root}>
            <Header />
            <Container className={classes.rootContent}>
                <Typography className={classes.title}>KINGDOM CRAFT</Typography>
                <Typography className={classes.slogan}>
                    Будь кем хочешь. Займи своё место в истории нашего мира
                </Typography>
                <Box>
                    <Button variant="contained" color="primary" size="large">
                        НАЧАТЬ
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

const mapStateToProps = (state) => {
    return {
        regions: {},
    };
};

export default connect(mapStateToProps, null)(Start);
