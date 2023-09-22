import "./style.css";

const NameCard = ({ name, age, gender = "?" }) => {
  const classNameCard = `card ${gender !== "?" ? gender.toLowerCase() : ""}`;

  return (
    <div
      className={classNameCard}
      onClick={() => console.log("You click", name)}
    >
      <div className="name">Name: {name}</div>
      <div className="age">Age: {age}</div>
      <div className="gender">Gender: {gender}</div>
    </div>
  );
};

export default NameCard;
