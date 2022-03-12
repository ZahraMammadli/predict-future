import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Grid from "@material-ui/core/Grid";

export default function Predictions(props) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "13vh" }}
    >
      <Grid item xs={10}>
        <Card
          sx={{
            maxWidth: 555,
            minWidth: 555,
            justifyContent: "center",
            alignContent: "center",
            padding: "3px",
          }}
        >
          {/*TODO:  We can use this part later on for gif API */}
          {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}

          <CardContent>
            <span className="post__headerSpecial">{props.User}</span>
            <div className="post__headerDescription">
              <p>{props.Text}</p>
            </div>
          </CardContent>
          <CardActions>
            <div className="post__footer">
              <ChatBubbleOutlineIcon fontSize="small" />
              <RepeatIcon fontSize="small" />
              <FavoriteBorderIcon fontSize="small" />
            </div>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
