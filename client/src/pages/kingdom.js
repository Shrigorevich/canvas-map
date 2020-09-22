import { Box, Container, Grid, Typography } from "@material-ui/core";
import { Switch, Link, Route, Redirect } from "react-router-dom";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { makeStyles } from "@material-ui/core/styles";
import theme from "../components/theme";
import clsx from "clsx";
import Image from "../images/bg.png";
import klogo from "../images/k_logo_1.png";
import kpic from "../images/k_pic_1.jpg";
import kpic2 from "../images/k_pic_2.jpg";

const useStyles = makeStyles((theme) => ({
    root: {},
    banner: {
        background: `url(${Image}) no-repeat center`,
        backgroundSize: "cover",
        color: theme.palette.primary.textWhite,
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "64px",
        flexDirection: "column",
    },

    kingdom: {
        margin: "16px 0",
    },

    kingdomLogo: {
        display: "flex",
        alignItems: "center",
    },

    kpic: {
        //objectFit: "contain",
        width: "100%",
        height: "auto",
    },

    description: {
        padding: "0 16px 16px 16px",
    },

    subMenu: {
        borderRadius: "5px",
        display: "flex",
        fontSize: "1.1rem",
        "& div:nth-child(1)": {
            padding: "4px 8px 6px 8px",
            borderTop: "1px solid orange",
            borderLeft: "1px solid orange",
            borderBottom: "1px solid orange",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
        },
        "& div:nth-child(2)": {
            padding: "4px 8px 6px 8px",
            borderTop: "1px solid orange",
            borderBottom: "1px solid orange",
        },
        "& div:nth-child(3)": {
            padding: "4px 8px 6px 8px",
            borderTop: "1px solid orange",
            borderRight: "1px solid orange",
            borderBottom: "1px solid orange",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
        },

        "& div > a": {
            color: "#fff",
            textDecoration: "none",
        },
    },

    activeLink: {
        background: "orange",
    },
}));

const Kingdom = (props) => {
    const classes = useStyles();

    const [active, setActive] = useState(1);

    const links = [
        {
            title: "КАРТА",
            path: "/universe/map",
        },
        {
            title: "КОРОЛЕВСТВА",
            path: "/universe/kingdoms",
        },
        {
            title: "КОДЕКС",
            path: "/universe/codex",
        },
    ];

    return (
        <div>
            <Header />
            <Box className={classes.banner}>
                <Box mb={1}>
                    <Typography variant="h4">
                        Вселенная Kingdom Craft
                    </Typography>
                </Box>
                <Box className={classes.subMenu}>
                    {links.map((item, i) => (
                        <Box
                            key={item.title}
                            className={clsx(i == active && classes.activeLink)}
                        >
                            <Link to={item.path} onClick={() => setActive(i)}>
                                {item.title}
                            </Link>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Switch>
                <Route path="/universe/kingdoms">
                    <Box>
                        <Container>
                            <Box className={classes.kingdom}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <img
                                            src={kpic}
                                            alt="kpic"
                                            className={classes.kpic}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        className={classes.description}
                                    >
                                        <Box className={classes.kingdomLogo}>
                                            <Box mr={1}>
                                                <img src={klogo} alt="logo" />
                                            </Box>

                                            <Typography variant="h5">
                                                Королевство Грифона
                                            </Typography>
                                        </Box>
                                        <Box mb={1}>
                                            <Typography>
                                                В Королевстве Грифона было 3
                                                герцогства: Грифона, Ворона,
                                                Гончей. В центре находилась
                                                королевская провинция.
                                                Королевская провинция —
                                                центральное владение Священного
                                                Королевства, по традиции
                                                управляемое лично Королями
                                                правящей династии. На территории
                                                королевской провинции
                                                расположены развалины древней
                                                столицы империи, Когстон.
                                            </Typography>
                                        </Box>

                                        <Typography>
                                            Во времена правления Королевства
                                            Грифона в теории абсолютной властью
                                            в ней обладал Император Грифона,
                                            однако в реальности сельская
                                            местность была поделена на шесть
                                            герцогств, несколько дюжин баронств,
                                            по меньшей мере девять так
                                            называемых независимых государств и
                                            т. д., из-за чего Император большей
                                            частью был занят перестановкой
                                            аристократов на властных постах.
                                            Зачастую как минимум одна из этих
                                            территорий бывала охвачена мятежом,
                                            хотя большими жертвами или крупным
                                            размахом такие волнения отличались
                                            редко.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Container>
                        <Container>
                            <Box className={classes.kingdom}>
                                <Grid container direction="row-reverse">
                                    <Grid item xs={6}>
                                        <img
                                            src={kpic2}
                                            alt="kpic"
                                            className={classes.kpic}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={6}
                                        className={classes.description}
                                    >
                                        <Box className={classes.kingdomLogo}>
                                            <Box mr={1}>
                                                <img src={klogo} alt="logo" />
                                            </Box>

                                            <Typography variant="h5">
                                                Королевство Варваров
                                            </Typography>
                                        </Box>
                                        <Box mb={1}>
                                            <Typography>
                                                В Королевстве Грифона было 3
                                                герцогства: Грифона, Ворона,
                                                Гончей. В центре находилась
                                                королевская провинция.
                                                Королевская провинция —
                                                центральное владение Священного
                                                Королевства, по традиции
                                                управляемое лично Королями
                                                правящей династии. На территории
                                                королевской провинции
                                                расположены развалины древней
                                                столицы империи, Когстон.
                                            </Typography>
                                        </Box>

                                        <Typography>
                                            Во времена правления Королевства
                                            Грифона в теории абсолютной властью
                                            в ней обладал Император Грифона,
                                            однако в реальности сельская
                                            местность была поделена на шесть
                                            герцогств, несколько дюжин баронств,
                                            по меньшей мере девять так
                                            называемых независимых государств и
                                            т. д., из-за чего Император большей
                                            частью был занят перестановкой
                                            аристократов на властных постах.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Container>
                    </Box>
                </Route>
                <Route path="/universe/map">MAP</Route>
                <Route path="/universe/codex">CODEX</Route>
                <Route exact path="/universe">
                    <Redirect to="/universe/kingdoms"></Redirect>
                </Route>
            </Switch>
            <Footer />
        </div>
    );
};

export default Kingdom;
