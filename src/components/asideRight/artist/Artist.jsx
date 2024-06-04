import "./artist.scss";
const Artist = (props) => {
  const artist = props.artist;
  return (
    <div className="artist">
      <img src={artist.url} alt="" />
      <div className="profile">
        <img src={artist.photoUrl} alt="" className="profileImg" />
        <div className="about">
          <span className="name">{artist.artistName}</span>
          <span className="tag">{artist.tag}</span>
        </div>
      </div>
    </div>
  );
};

export default Artist;
