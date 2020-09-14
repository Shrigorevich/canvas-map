import { createMuiTheme } from "@material-ui/core/styles";
import { lightGreen, amber, yellow } from "@material-ui/core/colors";

export default createMuiTheme({
    // typography: {
    //     useNextVariants: true,
    //     color: "#fff",
    // },
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
            white: "#fff",
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        contrastText: "#fff",
    },
});
