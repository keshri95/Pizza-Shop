import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>This is header</Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
