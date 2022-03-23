import React from "react";
import "./SinglePrediction.css";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import CommentList from "../../components/Comments/CommentsList";
import CommentForm from "../../components/Comments/Comments";
import { QUERY_SINGLE_PREDICTION } from "../../utils/queries";
import Nebula from "../../assets/videos/Nebula.mp4";

const TEXT_SIZE = 250;
const SinglePrediction = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { predictionId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PREDICTION, {
    // pass URL parameter
    variables: { predictionId: predictionId },
  });

  const prediction = data?.prediction || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="feature">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          margin: "0",
          height: "100vh",
          width: "100vw",
          left: "50%",
          top: "50%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={Nebula} type="video/mp4" />
      </video>
      <div className="my-3">
        <h3 className="card-header bg-dark text-light p-2 m-0">
          {prediction.predictionAuthor} <br />
        </h3>
        <div className="bg-light py-4">
          <blockquote
            className="p-4"
            style={{
              fontSize: "1.5rem",
              fontStyle: "italic",
              border: "2px dotted #1a1a1a",
              lineHeight: "1.5",
            }}
          >
            {prediction.predictionText}
          </blockquote>
        </div>

        <div className="my-5">
          <CommentList comments={prediction.comments} />
        </div>
        <div className="m-3 p-4" style={{ border: "1px dotted #1a1a1a" }}>
          <CommentForm predictionId={prediction._id} />
        </div>
      </div>
    </div>
  );
};

export default SinglePrediction;
