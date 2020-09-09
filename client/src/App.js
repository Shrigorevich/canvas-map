import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import theme from "./components/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

import Main from "./pages/main";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";

const App = (props) => {
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
                    <Route path="/about-us">
                        <AboutUs />
                    </Route>
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

const mapDispatchToProps = {};

export default connect(null, mapDispatchToProps)(App);
