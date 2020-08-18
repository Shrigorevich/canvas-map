import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import {
    Table,
    Box,
    TextField,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    Toolbar,
    Typography,
    Paper,
    Checkbox,
    IconButton,
    Tooltip,
    FormControlLabel,
    Switch,
} from "@material-ui/core";
import { grey, lightGreen } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import FilterListIcon from "@material-ui/icons/FilterList";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import { SpeedDial, SpeedDialIcon } from "@material-ui/lab";

import CreateItem from "./CreateItem";

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === "light"
            ? {
                  color: theme.palette.secondary.main,
                  backgroundColor: lighten(theme.palette.secondary.light, 0.85),
              }
            : {
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.secondary.dark,
              },
    title: {
        flex: "1 1 100%",
    },
}));

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        padding: "12px",
    },
    paper: {
        width: "100%",
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        top: 20,
        width: 1,
    },
    box: {
        display: "flex",
        justifyContent: "space-between",
    },
    speedDial: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        width: "56px",
        height: "56px",
        borderRadius: "28px",
        borderStyle: "none",
        outline: "none",
        cursor: "pointer",
        backgroundColor: theme.palette.secondary.main,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
    head: {
        backgroundColor: grey[900],
    },
}));

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
        "&:hover": {
            backgroundColor: `${grey[600]} !important`,
            color: "#000 !important",
        },
    },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
    root: {
        padding: "0 12px 0 12px",
    },
}))(TableCell);

const headCells = [
    {
        id: "for_sale",
        numeric: false,
        disablePadding: false,
        label: "For Sale",
    },
    {
        id: "tl_coords",
        numeric: true,
        disablePadding: false,
        label: "Top Left",
    },
    {
        id: "tr_coords",
        numeric: true,
        disablePadding: false,
        label: "Top Right",
    },
    {
        id: "br_coords",
        numeric: true,
        disablePadding: false,
        label: "Bot Right",
    },
    {
        id: "bl_coords",
        numeric: true,
        disablePadding: false,
        label: "Bot Left",
    },
];

const EnhancedTableHead = (props) => {
    const {
        classes,
        order,
        orderBy,
        rowCount,
        onRequestSort,
        changeFilter,
    } = props;

    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead className={classes.head}>
            <TableRow>
                <TableCell
                    align={"left"}
                    padding={"default"}
                    sortDirection={orderBy === "number" ? order : false}
                >
                    <TableSortLabel
                        active={orderBy === "number"}
                        direction={orderBy === "number" ? order : "asc"}
                        onClick={createSortHandler("number")}
                    >
                        №
                        {orderBy === "number" ? (
                            <span className={classes.visuallyHidden}>
                                {order === "desc"
                                    ? "sorted descending"
                                    : "sorted ascending"}
                            </span>
                        ) : null}
                    </TableSortLabel>
                </TableCell>
                <TableCell
                    key={"owner"}
                    align={"left"}
                    padding={"none"}
                    sortDirection={orderBy === "owner" ? order : false}
                >
                    <TextField
                        id="outlined-secondary"
                        label="Owner"
                        variant="outlined"
                        color="secondary"
                        size="small"
                        onChange={changeFilter}
                    />
                </TableCell>

                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={"left"}
                        padding={headCell.disablePadding ? "none" : "default"}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
                {true && (
                    <TableCell align={"left"} padding={"default"}>
                        Actions
                    </TableCell>
                )}
            </TableRow>
        </TableHead>
    );
};

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const Dashboard = (props) => {
    const classes = useStyles();
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("number");
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [filter, setFilter] = React.useState("");
    const [openCPanel, setOpenCPanel] = React.useState(false);
    const [editForm, setEditForm] = React.useState({});
    const [regionToEdit, setRegionToEdit] = React.useState(null);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
        console.log(property, isAsc);
    };

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const handleOpenCPanel = () => {
        setOpenCPanel((openCPanel) => !openCPanel);
    };

    const handleOpenEditForm = (row) => {
        if (row) {
            setRegionToEdit(row.number);
            setEditForm({
                owner: row.owner,
                tl_coords: `${row.tl_coords.x} ${row.tl_coords.y}`,
                // tr_coords: `${row.tr_coords.x} ${row.tr_coords.y}`,
                // br_coords: `${row.br_coords.x} ${row.br_coords.y}`,
                // bl_coords: `${row.bl_coords.x} ${row.bl_coords.y}`,
            });
        } else {
            setRegionToEdit(null);
            setEditForm(null);
        }
    };

    const handleChangeEditForm = (event) => {
        event.persist();
        setEditForm((editForm) => ({
            ...editForm,
            [event.target.name]: event.target.value,
        }));
    };

    const emptyRows =
        rowsPerPage -
        Math.min(
            rowsPerPage,
            props.regions.civilian_sites.length - page * rowsPerPage
        );

    return (
        <div className={classes.root}>
            <button className={classes.speedDial} onClick={handleOpenCPanel}>
                <SpeedDialIcon />
            </button>
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? "small" : "medium"}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={props.regions.civilian_sites.length}
                            changeFilter={handleChangeFilter}
                        />
                        <TableBody>
                            {stableSort(
                                props.regions.civilian_sites,
                                getComparator(order, orderBy)
                            )
                                .filter((item) =>
                                    item.owner
                                        .toLowerCase()
                                        .includes(filter.toLowerCase())
                                )
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row, index) => {
                                    return regionToEdit === row.number ? (
                                        <StyledTableRow
                                            tabIndex={-1}
                                            key={index}
                                        >
                                            <TableCell align="left">
                                                {row.number}
                                            </TableCell>
                                            <StyledTableCell
                                                align="left"
                                                padding={"none"}
                                            >
                                                <TextField
                                                    id="outlined-secondary"
                                                    label="Owner"
                                                    variant="standard"
                                                    color="secondary"
                                                    size="small"
                                                    onChange={
                                                        handleChangeEditForm
                                                    }
                                                    value={editForm.owner}
                                                    name="owner"
                                                />
                                            </StyledTableCell>
                                            <TableCell align="left">
                                                {row.for_sale ? "Yes" : "No"}
                                            </TableCell>
                                            <StyledTableCell
                                                align="left"
                                                padding={"none"}
                                            >
                                                <TextField
                                                    id="outlined-secondary"
                                                    label="Top Left"
                                                    variant="standard"
                                                    color="secondary"
                                                    size="small"
                                                    onChange={
                                                        handleChangeEditForm
                                                    }
                                                    value={editForm.tl_coords}
                                                    name="tl_coords"
                                                />
                                            </StyledTableCell>
                                            <StyledTableCell
                                                align="left"
                                                padding={"none"}
                                            >
                                                <TextField
                                                    id="outlined-secondary"
                                                    label="Top Right"
                                                    variant="standard"
                                                    color="secondary"
                                                    size="small"
                                                    onChange={
                                                        handleChangeEditForm
                                                    }
                                                    value={editForm.tl_coords}
                                                />
                                            </StyledTableCell>
                                            <StyledTableCell
                                                align="left"
                                                padding={"none"}
                                            >
                                                <TextField
                                                    id="outlined-secondary"
                                                    label="Bot Right"
                                                    variant="standard"
                                                    color="secondary"
                                                    size="small"
                                                    onChange={
                                                        handleChangeEditForm
                                                    }
                                                    value={editForm.tl_coords}
                                                />
                                            </StyledTableCell>
                                            <StyledTableCell
                                                align="left"
                                                padding={"none"}
                                            >
                                                <TextField
                                                    id="outlined-secondary"
                                                    label="Bot Left"
                                                    variant="standard"
                                                    color="secondary"
                                                    size="small"
                                                    onChange={
                                                        handleChangeEditForm
                                                    }
                                                    value={editForm.tl_coords}
                                                />
                                            </StyledTableCell>
                                            {true && (
                                                <TableCell
                                                    align="left"
                                                    padding={"none"}
                                                >
                                                    <IconButton aria-label="edit">
                                                        <CheckIcon
                                                            fontSize={"small"}
                                                        />
                                                    </IconButton>
                                                    <IconButton aria-label="delete">
                                                        <CloseIcon
                                                            fontSize={"small"}
                                                            onClick={() =>
                                                                handleOpenEditForm(
                                                                    null
                                                                )
                                                            }
                                                        />
                                                    </IconButton>
                                                </TableCell>
                                            )}
                                        </StyledTableRow>
                                    ) : (
                                        <StyledTableRow
                                            hover
                                            tabIndex={-1}
                                            key={index}
                                        >
                                            <TableCell align="left">
                                                {row.number}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.owner}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.for_sale ? "Yes" : "No"}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.tl_coords.x +
                                                    " : " +
                                                    row.tl_coords.y}
                                            </TableCell>
                                            <TableCell align="left">
                                                -
                                            </TableCell>
                                            <TableCell align="left">
                                                -
                                            </TableCell>
                                            <TableCell align="left">
                                                -
                                            </TableCell>
                                            {true && (
                                                <TableCell
                                                    align="left"
                                                    padding={"none"}
                                                >
                                                    <IconButton
                                                        aria-label="edit"
                                                        onClick={() =>
                                                            handleOpenEditForm(
                                                                row
                                                            )
                                                        }
                                                    >
                                                        <EditIcon
                                                            fontSize={"small"}
                                                        />
                                                    </IconButton>
                                                    <IconButton aria-label="delete">
                                                        <DeleteIcon
                                                            fontSize={"small"}
                                                        />
                                                    </IconButton>
                                                </TableCell>
                                            )}
                                        </StyledTableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box className={classes.box}>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15, 25]}
                        component="div"
                        count={props.regions.civilian_sites.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={dense}
                                onChange={handleChangeDense}
                            />
                        }
                        label="Dense padding"
                    />
                </Box>
            </Paper>
            <CreateItem status={openCPanel} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        regions: {
            civilian_sites: state.map.regions?.civilian_sites,
            admin_sites: state.map.regions?.admin_sites,
        },
    };
};

export default connect(mapStateToProps, null)(Dashboard);
