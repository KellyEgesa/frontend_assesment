import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Book() {
  const [books, setBook] = useState([]);
  const [spinner, setSpinner] = useState(false);
  async function getData() {
    await axios
      .get("https://shrouded-plains-45196.herokuapp.com/api/books")
      .then((response) => {
        setBook(response.data);
        setSpinner(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(books);

  return (
    <div className="App">
      <Link className="btn btn-primary" to={`/characters`}>
        See Characters
      </Link>
      <div className="body ">
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
            {books.map((book) => (
              <div
                className="card mb-3 rounded-3 shadow-sm"
                style={{
                  width: "20rem",
                  marginLeft: "10px",
                  marginBottom: "10px",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title text-dark text-start fs-3 fw-semibold">
                    {book.name}
                  </h5>
                  <div className="card-text text-dark text-start fs-5 fw-normal">
                    Authors:-
                    {book.authors.map((names) => (
                      <p>{names},</p>
                    ))}
                  </div>
                  <div className="card-text text-dark text-start fs-5 fw-normal">
                    Comments: {book.commentCount}
                  </div>
                  <div className="card-text text-dark text-start fs-6 fw-light">
                    Released: {new Date(book.released).toDateString()}
                  </div>
                  <Link className="btn btn-primary" to={`/${book.id}`}>
                    See comments
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Book;
