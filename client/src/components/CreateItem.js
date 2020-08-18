import React from "react";
import { connect } from "react-redux";
import { TextField, Grid, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./theme";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        top: "100px",
        left: "33%",
    },
    grid: {
        background: "#303030",
        padding: "12px",
        borderRadius: "5px",
    },
}));

const CreateItem = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={4} className={classes.grid}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            id="standard-basic"
                            label="№"
                            placeholder="Number of the region"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="standard-basic"
                            label="Owner"
                            placeholder="Owner`s Nickname"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="standard-basic"
                            label="Top Left (X, Y)"
                            placeholder="X Y"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="standard-basic"
                            label="Top Right (X, Y)"
                            placeholder="X Y"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="standard-basic"
                            label="Bot Right (X, Y)"
                            placeholder="X Y"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="standard-basic"
                            label="Bot Left (X, Y)"
                            placeholder="X Y"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="standard-basic"
                            label="Description"
                            rows={4}
                            multiline
                            fullWidth
                            variant="filled"
                            placeholder="The text of the book informing about the region"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary">
                            Create
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = (state) => {
    return {
        regions: {},
    };
};

export default connect(mapStateToProps, null)(CreateItem);
