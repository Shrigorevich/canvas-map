import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";
import { Alert } from "@material-ui/lab";

import { Redirect } from "react-router-dom";
import { login } from "../redux/actions";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                Kingdom Craft
            </Link>
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    input: {
        color: "#fff",
    },
}));

const LogIn = (props) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        nickname: "",
        password: "",
    });

    const changeHandler = (event) => {
        event.persist();
        setForm((form) => {
            return {
                ...form,
                [event.target.name]: event.target.value,
            };
        });
    };

    const submit = () => {
        const user = {
            nickname: form.nickname,
            password: form.password,
        };

        dispatch(login(user));
    };

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (props.error?.id == "LOGIN_FAIL") {
            setToggle(true);
        }
    }, [props.error]);

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box mt={2}>
                <Fade in={toggle}>
                    <Alert severity="error" className={classes.error}>
                        {props.error.msg.msg}
                    </Alert>
                </Fade>
            </Box>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log In
                </Typography>
                <div className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="nickname"
                        label="Nickname"
                        type="nickname"
                        id="nickname"
                        autoComplete="current-nickname"
                        InputProps={{
                            className: classes.input,
                        }}
                        value={form.nickname}
                        onChange={changeHandler}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        InputProps={{
                            className: classes.input,
                        }}
                        value={form.password}
                        onChange={changeHandler}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={submit}
                    >
                        Log In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/sign-up" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
            {props.isAuth ? <Redirect to="/" /> : null}
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        error: state.error,
    };
};

export default connect(mapStateToProps, null)(LogIn);
