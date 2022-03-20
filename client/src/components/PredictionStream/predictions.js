import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import "./Predictions.css";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Predictions({ predictions, title }) {
  return (
    <div>
      {predictions &&
        predictions.map((prediction) => (
          <div className="feed-body">
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
                <Typography variant="body2">
                  {prediction.predictionText}
                </Typography>
              </CardContent>
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
                      Comment
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

// export default function Predictions({ predictions, title }) {
//   return (
//     <div>
//       {predictions &&
//         predictions.map((prediction) => (
//           <Grid
//             container
//             spacing={0}
//             direction="column"
//             alignItems="center"
//             justify="center"
//             style={{ minHeight: "8vh" }}
//           >
//             <Grid item xs={10}>
//               <Card
//                 sx={{
//                   maxWidth: 555,
//                   minWidth: 555,
//                   justifyContent: "center",
//                   alignContent: "center",
//                   padding: "1px",
//                   backgroundColor: "transparent",
//                   color: "aliceblue",
//                   border: "0.5px solid aliceblue",
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="h5">
//                     <span className="post__headerSpecial">
//                       {prediction.predictionAuthor}
//                     </span>
//                   </Typography>
//                   <Typography variant="h6">
//                     <div className="post__headerDescription">
//                       <p>{prediction.predictionText}</p>
//                     </div>
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <div className="post__footer">
//                     <ChatBubbleOutlineIcon fontSize="small" />
//                     <RepeatIcon fontSize="small" />
//                     <FavoriteBorderIcon fontSize="small" />
//                   </div>
//                 </CardActions>
//               </Card>
//             </Grid>
//           </Grid>
//         ))}
//     </div>
//   );
// }
