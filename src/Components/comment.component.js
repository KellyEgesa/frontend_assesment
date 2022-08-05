import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

function Comments() {
  const [comments, setComments] = useState([]);
  const params = useParams();

  const [comment, setComment] = useState("");

  const [spinner, setSpinner] = useState(false);

  async function getData() {
    await axios
      .get(
        "https://shrouded-plains-45196.herokuapp.com/api/books/" +
          params.id +
          "/comments"
      )
      .then((response) => {
        setComments(response.data);
        setSpinner(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const validate = async () => {
    console.log(comment.content);
    await axios
      .post("https://shrouded-plains-45196.herokuapp.com/api/comments", {
        bookId: parseInt(params.id),
        content: comment,
      })
      .then(() => window.location.reload());
  };

  console.log(comments);

  return (
    <div className="App ">
      <div className="body ">
        <div>
          Add Comment <br />
          <input
            type="text"
            name="email"
            value={comment.content}
            size="50"
            placeholder="Enter a comment"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <br />
          <button className="btn btn-primary" onClick={validate}>
            Add Comment
          </button>
        </div>
        {spinner ? (
          <div
            className="spinner-border"
            style={{ width: "7rem", height: "7rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {comments.map((comment) => (
              <div
                className="card mb-3 rounded-3 shadow-sm"
                style={{
                  width: "20rem",
                  marginLeft: "10px",
                  marginBottom: "10px",
                }}
              >
                <div className="card-body">
                  <div className="card-text text-dark text-start fs-5 fw-normal">
                    {comment.content}
                  </div>
                  <div className="card-text text-dark text-start fs-6 fw-light">
                    Released: {new Date(comment.createdAt).toDateString()}
                  </div>
                  <div className="card-text text-dark text-start fs-6 fw-light">
                    IP: {comment.ipAddress}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Comments;
