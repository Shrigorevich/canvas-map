import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
    palette: {
        type: "dark",
        background: {
            main: "#212121",
        },
        primary: {
            main: "#FFC107",
            dark: "#FFA000",
            textWhite: "#FFFFFF",
        },
        secondary: {
            main: "#03A9F4",
            text: "#757575",
        },
        text: {
            primary: "#212121",
            secondary: "#757575",
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        contrastText: "#fff",
    },
});
