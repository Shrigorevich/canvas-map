import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import theme from "./components/theme";
import Main from "./pages/main";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./pages/home";

const App = (props) => {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path="/dashboard">
                        <Main />
                    </Route>
                    <Route path="/">
                        <Home />
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
