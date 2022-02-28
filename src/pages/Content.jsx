import React from "react";
import CoffeeCard from "./CoffeeCard";
import { Grid } from "@material-ui/core";
import coffeeMakerList from "./constant";

export default function Content() {
  const getcoffeeMakeCard = (coffeeMakerObj) => {
    // const { title, price, description, avatarSrc, imageUrl } = coffeeMakerObj;
    return (
      <Grid item xs={12} sm={4}>
        <CoffeeCard {...coffeeMakerObj} />;
      </Grid>
    );
  };
  return (
    <Grid container spacing={2}>
      {/* <Grid item xs={12} sm={4}> */}
      {/* <CoffeeCard
          title="Hamilton Beach"
          subtitle="$89"
          avatarSrc="https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fms314006.github.io%2Fstatic%2Fb7a8f321b0bbc07ca9b9d22a7a505ed5%2F97b31%2FReact.jpg&imgrefurl=https%3A%2F%2Fms314006.github.io%2Fsimple-implementing-ssr-in-react%2F&tbnid=xw_WKBzFQCtMyM&vet=12ahUKEwiFzLvV7qL2AhXzjNgFHezqB_gQMygFegUIARDdAQ..i&docid=kKIQCpxT4j3_xM&w=2212&h=1210&q=react&hl=en&authuser=0&ved=2ahUKEwiFzLvV7qL2AhXzjNgFHezqB_gQMygFegUIARDdAQ"
          imgSrc="https://m.media-amazon.com/images/I/41dL2Bty3JL._AC_SY200_.jpg"
          description="component also uses a CSS class header, so we need to add it inside"
        /> */}
      {coffeeMakerList.map((coffeeMakerObj) =>
        getcoffeeMakeCard(coffeeMakerObj)
      )}
    </Grid>
  );
}
