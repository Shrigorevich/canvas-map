import React from "react";
import { useDispatch } from "react-redux";
import { Box, Button } from "@material-ui/core";
import { logout } from "../redux/actions";

const LogOut = (props) => {
    const dispatch = useDispatch();
    return (
        <Box ml={2}>
            <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => dispatch(logout())}
            >
                Log Out
            </Button>
        </Box>
    );
};

export default LogOut;
