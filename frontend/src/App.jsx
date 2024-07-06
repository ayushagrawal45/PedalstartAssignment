import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import axios from "axios";
import { baseURL } from "./utils/constant";
import Popup from "./components/Popup";
import "./index.css"; // Assuming you have a separate CSS file for styling

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState({ toDo: "", description: "", time: "" });
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => setToDos(res.data))
      .catch((err) => console.log(err));
  }, [updateUI]);

  const saveToDo = () => {
    axios
      .post(`${baseURL}/save`, input)
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setInput({ toDo: "", description: "", time: "" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <div className="container">
        <h1 className="title">ToDo App</h1>

        <div className="input_holder">
          <input
            value={input.toDo}
            onChange={(e) => setInput({ ...input, toDo: e.target.value })}
            type="text"
            placeholder="Add a ToDo..."
            className="input_field"
          />
          <input
            value={input.description}
            onChange={(e) => setInput({ ...input, description: e.target.value })}
            type="text"
            placeholder="Add a Description..."
            className="input_field"
          />
          <input
            value={input.time}
            onChange={(e) => setInput({ ...input, time: e.target.value })}
            type="datetime-local"
            className="input_field"
          />
          <button onClick={saveToDo} className="add_button">Add</button>
        </div>

        <div className="todo_list">
          {toDos.map((el) => (
            <ToDo
              key={el._id}
              text={el.toDo}
              description={el.description}
              time={el.time}
              id={el._id}
              setUpdateUI={setUpdateUI}
              setShowPopup={setShowPopup}
              setPopupContent={setPopupContent}
            />
          ))}
        </div>
      </div>
      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          popupContent={popupContent}
          setUpdateUI={setUpdateUI}
        />
      )}
    </main>
  );
};

export default App;
