import axios from "axios";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/constant";

const Popup = ({ setShowPopup, popupContent, setUpdateUI }) => {
  const [input, setInput] = useState(popupContent.text);
  const [description, setDescription] = useState(popupContent.description);
  const [time, setTime] = useState(popupContent.time);

  const updateToDo = () => {
    axios
      .put(`${baseURL}/update/${popupContent.id}`, {
        toDo: input,
        description,
        time,
      })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setShowPopup(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1 className="cross" onClick={() => setShowPopup(false)} />
        <h1>Update ToDo</h1>

        <div className="popup__input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Update ToDo..."
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Update Description..."
          />
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            type="datetime-local"
            placeholder="Update Time..."
          />
          <button onClick={updateToDo}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
