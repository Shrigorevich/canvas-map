import { createMuiTheme } from "@material-ui/core/styles";
import { lightGreen, amber, yellow } from "@material-ui/core/colors";

export default createMuiTheme({
    // typography: {
    //     useNextVariants: true,
    //     color: "#fff",
    // },
    palette: {
        type: "dark",
        primary: {
            main: "#4CAF50",
            light: "#C8E6C9",
            dark: "#388E3C",
            textWhite: "#FFFFFF",
            text: "#212121",
        },
        secondary: {
            main: "#FFC107",
            divider: "#BDBDBD",
            text: "#757575",
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        contrastText: "#fff",
    },
});
