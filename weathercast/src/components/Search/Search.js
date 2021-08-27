import react from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        },
    },
}));

const Search = () => {
    const classes = useStyles();

    return (
        <form className={classes.root}>
            <TextField id="outlined-basic" label="Search by Zip" variant="outlined" />
        </form>
    );
};

export default Search;