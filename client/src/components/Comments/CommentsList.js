import React from "react";

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <>
      <h3
        className="sp-p-5 sp-display-inline-block"
        style={{ borderBottom: "1px dotted #1a1a1a" }}
      >
        Comments
      </h3>
      <div className="sp-flex-row sp-my-4">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="sp-col-12 sp-mb-3 sp-pb-3">
              <div className="sp-p-3 sp-bg-dark sp-text-light">
                <h5 className="sp-card-header">
                  {comment.commentAuthor} commented{" "}
                  <span style={{ fontSize: "0.825rem" }}>
                    on {comment.createdAt}
                  </span>
                </h5>
                <p className="sp-card-body">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CommentList;
