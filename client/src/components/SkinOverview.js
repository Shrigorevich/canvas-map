import React from "react";
import {
    TextField,
    Grid,
    Box,
    Button,
    Link,
    AppBar,
    Container,
    Toolbar,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActionArea,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./theme";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "16px 0",
    },

    skinDescription: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
    },
    skinLore: {
        padding: "16px",
        background: "#f5f5f5",
        borderRadius: "5px",
        flex: 1,
        marginBottom: "8px",
    },
    skinSkills: {
        padding: "16px",
        background: "#f5f5f5",
        borderRadius: "5px",
        flex: 1,
        marginTop: "8px",
    },

    customCard: {
        background: "#f5f5f5",
        borderRadius: "5px",
        width: "100%",
    },

    img: {
        width: "auto",
        height: "300",
        margin: "0 auto",
    },

    skill: {
        color: "#fff",
    },
}));

const SkinOverview = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root} name="skin-overview">
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Box className={classes.skinDescription}>
                        <Box className={classes.skinLore} boxShadow={2}>
                            <Box mb={2}>
                                <Typography variant="h5">
                                    {props.skin.name}
                                </Typography>
                            </Box>
                            <Typography color="textSecondary">
                                {props.skin.description}. Просто рандомный текст
                                для заполнения пустующего пространства, которое
                                потом надо будет заменить нормальным текстом
                            </Typography>
                        </Box>
                        <Box className={classes.skinSkills} boxShadow={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Box>
                                        <Typography variant="h5">
                                            Способности
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography
                                                    variant="h6"
                                                    className={classes.skill}
                                                >
                                                    Волк-одиночка
                                                </Typography>
                                                <Typography
                                                    className={classes.skill}
                                                >
                                                    Описание способности
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography
                                                    variant="h6"
                                                    className={classes.skill}
                                                >
                                                    Волк-одиночка
                                                </Typography>
                                                <Typography
                                                    className={classes.skill}
                                                >
                                                    Описание способности
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography
                                                    variant="h6"
                                                    className={classes.skill}
                                                >
                                                    Волк-одиночка
                                                </Typography>
                                                <Typography
                                                    className={classes.skill}
                                                >
                                                    Описание способности
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4} className={classes.heigth}>
                    <Card className={classes.customCard}>
                        <CardMedia
                            className={classes.img}
                            component="img"
                            alt="Contemplative Reptile"
                            src={props.skin.image}
                            title="Contemplative Reptile"
                        />
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SkinOverview;
