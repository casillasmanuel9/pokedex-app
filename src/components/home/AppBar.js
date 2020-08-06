import React from "react";

// Material UI
import { AppBar, InputBase, Toolbar, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// useStyles
import { useStylesAppbar } from "./useStylesAppbar";

export const AppBarComponent = ({ search, handleInputChange }) => {
  const classes = useStylesAppbar();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h4">Pokedex</Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              name="search"
              onChange={handleInputChange}
              value={search}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
