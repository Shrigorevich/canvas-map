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
} from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./theme";
import { NavLink } from "react-router-dom";

import card1 from "../images/card1.jpg";
import card2 from "../images/card2.png";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "16px 0",
    },

    button: {
        marginRight: theme.spacing(1),
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },

    stepContent: {
        padding: "0 24px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
    },

    img: {
        width: "100%",
        height: "auto",
        marginTop: "16px",
    },

    title: {
        textAlign: "center",
        margin: "0",
        padding: "16px 0 0 0 ",
        color: "#fff",
    },

    container: {
        backgroundColor: "#424242",
        borderRadius: "5px",
    },
}));

function getSteps() {
    return [
        "Регистрация",
        "Правила",
        "Покупка персонажа",
        "Подключение к серверу",
    ];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return {
                text:
                    "Step 1: Пройдите процесс регистрации как показано на скриншоте",
                image: card1,
            };
        case 1:
            return {
                text:
                    "Step 2: Перед началом игры на нашем сервере рекомендуется прочесть правила",
                image: card2,
            };
        case 2:
            return {
                text:
                    "Step 3: Для того, что бы начать играть, вам необходимо приобрести пропуск на сервер,\n ( Если вы умрёте, вам придется приобрести новую жизнь). \n Так же вы можете преобрести уникального персонажа, который даст вам приемущество в игре",
                image: card3,
            };
        case 3:
            return {
                text:
                    "Step 4: Скопируйте адрес сервера (kingdomcraft.mc) и можете подключаться к нему через Minecraft 1.15.2",
                image: card4,
            };
        default:
            return {
                text: "Step 5: Select campaign settings...",
                image: card1,
            };
    }
}

const Guide = (props) => {
    const classes = useStyles();

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    return (
        <Box className={classes.root}>
            <Container>
                <Box className={classes.container}>
                    <Typography variant="h4" className={classes.title}>
                        Как попасть на сервер
                    </Typography>
                    <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                        {steps.map((label, index) => {
                            return (
                                <Step key={label}>
                                    <StepButton onClick={handleStep(index)}>
                                        {label}
                                    </StepButton>
                                </Step>
                            );
                        })}
                    </Stepper>
                    <Box className={classes.stepContent}>
                        <Typography>
                            {getStepContent(activeStep).text}
                        </Typography>
                        <Grid container justify="center">
                            <Grid item xs={6}>
                                <img
                                    src={getStepContent(activeStep).image}
                                    className={classes.img}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Guide;
