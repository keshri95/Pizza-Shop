import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./pages/Header";
import Content from "./pages/Content";
import Filter from "./pages/Filter";
function App() {
  return (
    <Grid container direction="column">
      <Grid item>
          <Header />
      </Grid>
      <Grid item>
        {/* <Filter /> */}
      </Grid>
      <Grid item container style={{marginTop: '20px'}}>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    
    </Grid>
  );
}
export default App;
