import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardHeader, CardMedia, Menu } from "@material-ui/core";
import { Rating } from "@mui/material";
import { MenuItem } from "@mui/material";
export default function Pizza(props) {
  const [value, setValue] = React.useState(2);
  const { title, description, imageUrl, price } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card>
      <CardHeader title={title} />
      <CardMedia style={{ height: "150px" }} image={imageUrl} />
      <CardContent>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <CardActions>
        <Button size="small">Add</Button>
        <Button size="small">Delete</Button>
        {/* <Button size="small">Choose</Button> */}
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Choose
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Veg</MenuItem>
            <MenuItem onClick={handleClose}>Non-veg</MenuItem>
          </Menu>
        </div>
      </CardActions>
    </Card>
  );
}
