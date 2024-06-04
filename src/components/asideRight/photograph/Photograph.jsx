import "./photograph.scss";

const Photograph = (props) => {
  const photo = props.photo;
  return <img src={photo.url}></img>;
};

export default Photograph;
