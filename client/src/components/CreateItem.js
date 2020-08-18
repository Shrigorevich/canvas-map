import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { createRegion } from "./../redux/actions";
import { TextField, Grid, Box, Button, Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import theme from "./theme";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        top: "100px",
        left: "33%",
    },
    visibility: {
        visibility: "hidden",
    },
    grid: {
        background: "#303030",
        padding: "12px",
        borderRadius: "5px",
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "space-between",
    },
}));

const CreateItem = (props) => {
    console.log(props);
    const classes = useStyles();

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        number: "",
        owner: "",
        tl_coords: "",
        tr_coords: "",
        br_coords: "",
        bl_coords: "",
        description: "",
        for_sale: false,
    });

    const handleChangeForm = (event) => {
        event.persist();
        console.log(event.target.name);
        setForm((form) => {
            return { ...form, [event.target.name]: event.target.value };
        });
    };

    const handleClearForm = () => {
        setForm({
            number: "",
            owner: "",
            tl_coords: "",
            tr_coords: "",
            br_coords: "",
            bl_coords: "",
            description: "",
            for_sale: false,
        });
    };

    const handleSwitch = (event) => {
        event.persist();
        setForm((form) => {
            return { ...form, [event.target.name]: event.target.checked };
        });
    };

    const handleCreateRegion = () => {
        dispatch(createRegion(form));
    };

    return (
        <Grid
            container
            className={clsx(classes.root, !props.status && classes.visibility)}
        >
            <Grid item xs={4} className={classes.grid}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            id="number"
                            label="№"
                            placeholder="Number of the region"
                            inputProps={{
                                name: "number",
                            }}
                            onChange={handleChangeForm}
                            value={form.number}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="owner"
                            label="Owner"
                            placeholder="Owner`s Nickname"
                            inputProps={{
                                name: "owner",
                            }}
                            onChange={handleChangeForm}
                            value={form.owner}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="tl"
                            label="Top Left (X, Y)"
                            placeholder="X Y"
                            inputProps={{
                                name: "tl_coords",
                            }}
                            onChange={handleChangeForm}
                            value={form.tl_coords}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="tr_coords"
                            label="Top Right (X, Y)"
                            placeholder="X Y"
                            inputProps={{
                                name: "tr_coords",
                            }}
                            onChange={handleChangeForm}
                            value={form.tr_coords}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="bl_coords"
                            label="Bot Left (X, Y)"
                            placeholder="X Y"
                            inputProps={{
                                name: "bl_coords",
                            }}
                            onChange={handleChangeForm}
                            value={form.bl_coords}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="br_coords"
                            label="Bot Right (X, Y)"
                            placeholder="X Y"
                            inputProps={{
                                name: "br_coords",
                            }}
                            onChange={handleChangeForm}
                            value={form.br_coords}
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
                            inputProps={{
                                name: "description",
                            }}
                            onChange={handleChangeForm}
                            value={form.description}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        For Sale
                        <Switch
                            name="for_sale"
                            onChange={handleSwitch}
                            checked={form.for_sale}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.buttonGroup}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleCreateRegion}
                        >
                            Create
                        </Button>
                        <Button variant="contained" onClick={handleClearForm}>
                            Clear
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
