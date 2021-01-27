import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { IconButton } from "@material-ui/core";

function Nav(props) {
  return (
    <div className="nav__container">
      <div className="menu__icon">
        <IconButton 
        className="nav__ico" 
        clickable="true">
        <MenuIcon className="nav__ico"/>
        </IconButton>
        
      </div>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div className="search__container">
        <div className="search__icon">
          <SearchRoundedIcon className="nav__ico"/>
        </div>
      </div>
    </div>
  );
}

export default Nav;
