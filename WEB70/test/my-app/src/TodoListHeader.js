const Header = ({ calculateRemainingTasks, selectedLanguage }) => {
  return (
    <div>
      {selectedLanguage === "us" ? (
        <div className="header">
          You have {calculateRemainingTasks()}{" "}
          {calculateRemainingTasks() <= 1 ? "task" : "tasks"} left!
        </div>
      ) : (
        <div className="header">
          Bạn còn {calculateRemainingTasks()} nhiệm vụ!
        </div>
      )}
    </div>
  );
};

export default Header;
