import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./Predictions.css";
import { Link } from "@material-ui/core";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Predictions({ predictions, title }) {
  console.log(predictions);
  return (
    <div>
      {predictions &&
        predictions.map((prediction) => (
          <div key={prediction.id} className="feed-body">
            <Card
              sx={{
                backgroundColor: "transparent",
                color: "aliceblue",
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {prediction.predictionAuthor}
                </Typography>
                <Typography variant="h6">
                  {prediction.predictionText}
                </Typography>
                <Typography variant="body1">
                  Prediction For:
                  {prediction.predictionDate}
                </Typography>
              </CardContent>

              <img
                src={prediction.url}
                width="480"
                height="240"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
              ></img>

              <CardActions>
                <div className="pf-footer">
                  <div className="pf-predict-btn">
                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        backgroundColor: "grey",
                      }}
                    >
                      <Link
                        underline="none"
                        color="inherit"
                        href={"/singlePrediction/" + prediction._id}
                      >
                        Comment
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardActions>
            </Card>
          </div>
        ))}
    </div>
  );
}
