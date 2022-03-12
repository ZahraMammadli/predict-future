import * as React from "react";
import Card from "@mui/material/Card";
import "./post.css";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default function Predictions(props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        padding: "3px",
      }}
    >
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
  );
}
