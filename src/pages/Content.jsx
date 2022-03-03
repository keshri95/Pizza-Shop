import React from "react";
import Pizza from "./Pizza";
import { Grid } from "@material-ui/core";
import coffeeMakerList from "./constant";

export default function Content() {
  const getcoffeeMakeCard = (coffeeMakerObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <Pizza {...coffeeMakerObj} />;
      </Grid>
    );
  };
  return (
    <Grid container spacing={2}>
      {coffeeMakerList.map((coffeeMakerObj) =>
        getcoffeeMakeCard(coffeeMakerObj)
      )}
    </Grid>
  );
}
