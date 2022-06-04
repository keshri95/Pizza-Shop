import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>
          <img src="https://www.dominos.co.in/assets/Logo.png" alt="logo" />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
