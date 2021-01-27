import React from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import { IconButton } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer__container">
      <div className="home__icon">
        <IconButton>
          <HomeRoundedIcon 
          clickable="true" 
          className="footer__tab nav__ico" />
          <span className="nav__ico">Home</span>
        </IconButton>
      </div>

      <div className="profile__icon">
        <IconButton 
        clickable="true" 
        className="nav__ico">
          <PersonRoundedIcon className="nav__ico"/>
          <span className="nav__ico">Profile</span>
        </IconButton>
      </div>
    </div>
  );
}

export default Footer;
