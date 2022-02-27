import React, { useState } from "react";
import { ButtonGroup, IconButton, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SaveIcons from "@material-ui/icons/Save";
import DeleteIcons from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import MenuIcon from "@mui/icons-material/Menu";
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Save from "@material-ui/icons/Save";

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: "10px",
    color: "white",
    padding: "0 30px",
    display: "flex",
    background: "linear-gradient(45deg, #442, #df3)",
    marginBottom: "30px",
  },
});

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 26,
    },
  },
  // palette: {
  //   primary: {
  //     main: orange[500],
  //   },
  //   secondary: {
  //     main: green[500],
  //   },
  // },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Text something</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcons />}
          checkedIcon={<SaveIcons />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Testing checkbox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <header className="App-header">
          <AppBar color="secondary">
            <Toolbar>
              <IconButton>
                {/* <Menu /> */}
                <Save />
              </IconButton>
              <Typography variant="h6">MUI Theaming</Typography>
              <Button>Login</Button>
            </Toolbar>
          </AppBar>
          <Typography variant="h2" component="div">
            Welcome to MUI
          </Typography>
          <Typography variant="subtitle1">Welcome to MUI</Typography>

          <ButtonStyled />
          {/* <TextField
            color="secondary"
            variant="outlined"
            type="email"
            label="email"
            placeholder="ee@e.com"
          /> */}
          <Grid container spacing={4} justify="center">
            <Grid item>
              <Paper style={{ height: 75, width: 50 }} />
            </Grid>
            <Grid item>
              <Paper style={{ height: 75, width: 50 }} />
            </Grid>
            <Grid item>
              <Paper style={{ height: 75, width: 50 }} />
            </Grid>
            <Grid item>
              <Paper style={{ height: 75, width: 50 }} />
            </Grid>
          </Grid>
        </header>
        <CheckboxExample />
        <ButtonGroup variant="contained" color="primary">
          <Button startIcon={<SaveIcons />}>Save</Button>
          <Button startIcon={<DeleteIcons />}>Delete</Button>
        </ButtonGroup>
      </Container>
    </ThemeProvider>
  );
}

export default App;
