import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./components/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

import Main from "./pages/main";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Kingdom from "./pages/kingdom";
import Skin from "./pages/skin";
import SignUp from "./pages/signUp";
import LogIn from "./pages/logIn";

import { loadUser } from "./redux/actions";

const App = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
    });

    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path="/dashboard">
                        <Main />
                    </Route>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/shop">
                        <Shop />
                    </Route>
                    <Route path="/kingdom">
                        <Kingdom />
                    </Route>
                    <Route path="/login">
                        <LogIn />
                    </Route>
                    <Route path="/sign-up">
                        <SignUp />
                    </Route>
                    <Route path="/skin/:id" component={Skin} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    );
};

// const mapStateToProps = (state) => {
//     console.log(state);
//     return {
//         user: state.auth.user,
//     };
// };

export default App;
