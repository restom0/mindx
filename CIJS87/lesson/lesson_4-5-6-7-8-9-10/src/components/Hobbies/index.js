import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Hobbies = () => {
  const [hobbies, setHobbies] = useState([
    { id: uuidv4(), hobby: "📷" },
    { id: uuidv4(), hobby: "🎹" },
  ]);

  const deleteHobby = (hobbyId) => {
    const updatedHobbies = hobbies.filter((item) => item.id !== hobbyId);
    setHobbies(updatedHobbies);
  };

  const append = () => {
    setHobbies((prev) => {
      return [...prev, { id: uuidv4(), hobby: "new hobby" }];
    });
  };

  const prepend = () => {
    setHobbies((prev) => {
      return [{ id: uuidv4(), hobby: "new hobby" }, ...prev];
    });
  };

  const renderHobbyLi = ({ hobby, id }) => {
    return (
      <li key={id}>
        I
        <select>
          <option>likes</option>
          <option>loves</option>
        </select>
        {`${hobby} with key: ${id}`}
        <button onClick={() => deleteHobby(id)}>Delete</button>
      </li>
    );
  };

  return (
    <div>
      <h1>Rate hobbies!</h1>
      <button onClick={append}>Append hobby</button>
      <button onClick={prepend}>Prepend hobby</button>
      {hobbies.map((item) => renderHobbyLi(item))}
    </div>
  );
};

export default Hobbies;
