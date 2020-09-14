import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
    Grid,
    Box,
    Button,
    Link,
    AppBar,
    Container,
    Toolbar,
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

import skin1 from "../images/skin1.png";
import skin2 from "../images/skin2.png";
import skin3 from "../images/skin3.png";
import skin4 from "../images/skin4.png";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fff",
        padding: "24px 48px",
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
}));

const ShopContent = (props) => {
    const classes = useStyles();

    const cardsContent = [
        {
            img: skin1,
            name: "Паладин",
            description:
                "Паладин он и в африке паладин. А вообще тут будет краткое описание персонажа",
        },
        {
            img: skin2,
            name: "Странник",
            description:
                "Паладин он и в африке паладин. А вообще тут будет краткое описание персонажа",
        },
        {
            img: skin3,
            name: "Рыцарь",
            description:
                "Паладин он и в африке паладин. А вообще тут будет краткое описание персонажа",
        },
        {
            img: skin4,
            name: "Работяга",
            description:
                "Паладин он и в африке паладин. А вообще тут будет краткое описание персонажа",
        },
        {
            img: skin1,
            name: "Паладин",
            description:
                "Паладин он и в африке паладин. А вообще тут будет краткое описание персонажа",
        },
        {
            img: skin2,
            name: "Странник",
            description:
                "Паладин он и в африке паладин. А вообще тут будет краткое описание персонажа",
        },
        {
            img: skin3,
            name: "Рыцарь",
            description:
                "Паладин он и в африке паладин. А вообще тут будет краткое описание персонажа",
        },
        {
            img: skin4,
            name: "Работяга",
            description:
                "Паладин он и в африке паладин. А вообще тут будет краткое описание персонажа",
        },
    ];

    return (
        <Box className={classes.root}>
            <Grid container spacing={2}>
                {cardsContent.map((item) => (
                    <Grid item xs={3} key={item.name}>
                        <Card className={classes.customCard}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.img}
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="300"
                                    image={item.img}
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
                                        Узнать больше
                                    </Button>
                                </CardActions>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, null)(ShopContent);
