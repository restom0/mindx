import Profile from "../Profile";
import "./style.css";

const Gallery = () => {
  const johnson = {
    name: "Katherine Johnson",
    image: "https://i.imgur.com/MK3eW3As.jpg",
  };

  const adam = {
    name: "Katherine Adam",
    image: "https://i.imgur.com/MK3eW3As.jpg",
  };

  return (
    <div className="gallery">
      <h1>Amazing scientists</h1>
      <Profile image={johnson.image} name={johnson.name} />
      <Profile image={adam.image} name={adam.name} />
    </div>
  );
};

export default Gallery;
