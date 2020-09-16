import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, animateScroll as scroll } from "react-scroll";
import {
    Grid,
    Box,
    Button,
    Container,
    Typography,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import theme from "./theme";
import { NavLink } from "react-router-dom";
import SkinOverview from "./SkinOverview";

// import skin1 from "../images/skin1.png";
// import skin2 from "../images/skin2.png";
// import skin3 from "../images/skin3.png";
// import skin4 from "../images/skin4.png";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fff",
        padding: "16px 0",
    },

    customCard: {
        backgroundColor: "#fff",
    },

    img: {
        width: "auto",
        height: "300px",
        margin: "0 auto",
    },

    cardsContent: {
        backgroundColor: "#f5f5f5",
    },

    actions: {
        padding: "0 16px 16px 16px",
    },

    buttonToTop: {
        position: "fixed",
        right: "20px",
        bottom: "20px",
        width: "50px",
        height: "50px",
        borderRadius: "25px",
        backgroundColor: theme.palette.secondary.main,
        zIndex: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
    },
}));

const ShopContent = (props) => {
    const classes = useStyles();

    const [state, setState] = useState({
        skin: props.skins[0],
    });

    const skinOverview = (id) => {
        setState({
            skin: props.skins[id],
        });
    };

    return (
        <Box className={classes.root}>
            <Container>
                <Grid container spacing={2}>
                    {props.skins.map((item, index) => (
                        <Grid item xs={3} key={item.id}>
                            <Card className={classes.customCard}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.img}
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="300"
                                        src={item.image}
                                        title="Contemplative Reptile"
                                    />
                                </CardActionArea>
                                <Box className={classes.cardsContent}>
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            {item.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions className={classes.actions}>
                                        <Button
                                            size="small"
                                            color="primary"
                                            variant="contained"
                                        >
                                            Купить
                                        </Button>
                                        <Button
                                            size="small"
                                            color="secondary"
                                            variand="outlined"
                                        >
                                            <Link
                                                to="skin-overview"
                                                spy={true}
                                                smooth={true}
                                                duration={300}
                                                onClick={() =>
                                                    skinOverview(index)
                                                }
                                            >
                                                Узнать больше
                                            </Link>
                                        </Button>
                                    </CardActions>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <SkinOverview skin={state.skin} />
            </Container>
            <Box
                onClick={() => scroll.scrollToTop({ duration: 200 })}
                className={classes.buttonToTop}
            >
                TOP
            </Box>
        </Box>
    );
};

const mapStateToProps = (state) => {
    return { skins: state.skins.list };
};

export default connect(mapStateToProps, null)(ShopContent);
