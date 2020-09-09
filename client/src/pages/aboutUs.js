import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import VideoApi from "../components/YouTube/VideoApi";
import VideoWrapper from "../components/YouTube/VideoWrapper";
import {
    Box,
    Grid,
    Typography,
    Divider,
    Card,
    CardActionArea,
    CardMedia,
    Button,
    CardContent,
    CardActions,
} from "@material-ui/core";
import card1 from "../images/card1.jpg";
import card2 from "../images/card2.png";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import theme from "../components/theme";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "64px 0 0 0",
    },
    divider: {
        backgroundColor: "#000",
    },
    dividerWrapper: {
        display: "flex",
        alignItems: "center",
    },

    container: {
        padding: "16px",
    },

    aboutLife: {
        margin: "16px 0 16px 0",
    },
}));

const AboutUs = (props) => {
    const classes = useStyles();

    return (
        <div className="home-wrapper">
            <Header />
            <Box className={classes.root}>
                <Grid container className={classes.container} spacing={2}>
                    <Grid item xs={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={card1}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        RP система
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Будь кем хочешь. Занимайся чем хочешь.
                                        Руби, копай, добывай, торгуй. Твой успех
                                        - результат твоей работы.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={card2}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        Социальная иерархия
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Хочешь быть крестьянином, работать за
                                        еду и стараться не умереть? Пожалуйста.
                                        Хочешь возглавить свой феод? Все в твоих
                                        руках.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={card3}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        Развитие королевства
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Веди торговлю, покупай землю, строй,
                                        зарабатывай, повышай свой статус.
                                        Развивай общее королевство вместе со
                                        всеми.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={card4}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        Ивенты
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Изучай лор нашего мира, исследуй
                                        заброшенные памятки былых времен,
                                        учавствуй в уникальных сюжетных ивентах.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Grid container className={classes.aboutLife}>
                <Grid item xs={6}>
                    <VideoWrapper />
                </Grid>
                <Grid item xs={6}>
                    <Box px={2}>
                        <Box mb={2}>
                            <Typography variant="h5">
                                Жизнь в мире Kings Craft
                            </Typography>
                        </Box>
                        <Typography variant="body1">
                            Королевство Джерония Является Феодальной Абсолютной
                            монархией с капиталистической экономической системой
                            взаимоотношений.
                        </Typography>
                        <Typography variant="body1">
                            Любое продвижение по Карьерной Лестнице происходит
                            непосредственно от вклада Граждан в развитие
                            королевства. Что измеряется в определенной сумме
                            Джеронов (деньги королевства)
                        </Typography>
                        <Typography variant="body1">
                            Джерон, является монетой которую может чеканить лишь
                            Король, и которая доступна лишь ему при старте Игры
                            в формате королевской казны определенной суммы
                        </Typography>
                        <Typography variant="body1">
                            Иерархия Социальных Сословий Крестьянин Горожанин
                            Буржуа Граф Маркиз Герцог. Возможность занять ту или
                            иную должность в государственной структуре, в
                            военном деле и тд непосредственно зависит от
                            Социального статуса того или иного Гражданина.
                        </Typography>
                        <Typography variant="body1">
                            Дроп естественных ресурсов на карте уменьшен, чтобы
                            придать им дополнительную ценность и сложность в
                            добыче.
                        </Typography>
                        <Typography variant="body1">
                            Начиная из Знатных титулов (Графы, Маркизы, Герцоги)
                            Могут организовывать собственные феоды
                            соответственно (Деревни, Города, Вассальные
                            Королевства) в подчинении Джеронии
                        </Typography>
                        <Typography variant="body1"></Typography>
                    </Box>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, null)(AboutUs);
