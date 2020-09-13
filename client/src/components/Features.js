import React from "react";
import {
    Grid,
    Box,
    Button,
    Link,
    Container,
    Typography,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import theme from "./theme";

import card1 from "../images/card1.jpg";
import card2 from "../images/card2.png";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "16px",
        backgroundColor: "#f5f5f5",
    },
}));

const content = [
    {
        image: card1,
        title: "Социальная иерархия",
        description:
            "Хочешь быть крестьянином, работать за еду и стараться не умереть? Пожалуйста. Хочешь возглавить свой феод? Все в твоих руках.",
    },
    {
        image: card2,
        title: "Развитие королевства",
        description:
            "Веди торговлю, покупай землю, строй, зарабатывай, повышай свой статус. Развивай общее королевство вместе со всеми.",
    },
    {
        image: card3,
        title: "Ивенты",
        description:
            "Изучай лор нашего мира, исследуй заброшенные памятки былых времен, учавствуй в уникальных сюжетных ивентах.",
    },
    {
        image: card4,
        title: "РП система",
        description:
            "Будь кем хочешь. Занимайся чем хочешь. Руби, копай, добывай, торгуй. Твой успех - результат твоей работы.",
    },
];

const Features = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid container spacing={2}>
                {content.map((item) => (
                    <Grid item xs={6} key={item.title}>
                        <Box
                            className={classes.card}
                            boxShadow={3}
                            borderRadius={5}
                        >
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="280"
                                        image={item.image}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Features;
