import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from "react";
import "../App.css";

function Characters() {
  const [characters, setCharacter] = useState([]);
  const [spinner, setSpinner] = useState(true);

  async function getData() {
    await axios
      .get("https://shrouded-plains-45196.herokuapp.com/api/characters")
      .then((response) => {
        setCharacter(response.data);
        setSpinner(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  async function filter(filter) {
    setSpinner(true);
    await axios
      .get(
        "https://shrouded-plains-45196.herokuapp.com/api/characters/?gender=" +
          filter
      )
      .then((response) => {
        setCharacter(response.data);
        setSpinner(false);
      });
  }

  console.log(characters);
  return (
    <div className="App">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => filter("Male")}
        >
          Male
        </button>
        <button
          type="button"
          class="btn btn-success"
          onClick={() => filter("Female")}
        >
          Female
        </button>
      </div>
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
            {characters.data.map((character) => (
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
                    {character.name}
                  </h5>
                  <div className="card-text text-dark text-start fs-5 fw-normal">
                    {character.gender}
                  </div>
                  <div className="card-text text-dark text-start fs-5 fw-normal">
                    {character.age}
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

export default Characters;
