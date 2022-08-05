import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [comments, setComments] = useState([]);

  const [comment, setComment] = useState("");

  const [spinner, setSpinner] = useState(false);

  async function getData() {
    await axios
      .get("https://shrouded-plains-45196.herokuapp.com/api/books/4/comments")
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
        bookId: 4,
        content: comment,
      })
      .then(window.location.reload());
  };

  console.log(comments);

  return <div className="App "></div>;
}

export default App;
