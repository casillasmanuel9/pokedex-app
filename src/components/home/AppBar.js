import React from "react";

// Material UI
import { AppBar, InputBase, Toolbar, Typography, Hidden } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// useStyles
import { useStylesAppbar } from "./useStylesAppbar";

export const AppBarComponent = ({ search, handleInputChange }) => {
  const classes = useStylesAppbar();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <img alt='pokeball' className='pokeball-img' width='40' src='./assets/icons/PokeBallIcon.svg.png'/>
          <Hidden smDown><Typography variant="h4">Pokédex</Typography></Hidden>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar.."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              name="search"
              onChange={handleInputChange}
              value={search}
              inputProps={{ "aria-label": "search" }}
              autoComplete='off'
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
