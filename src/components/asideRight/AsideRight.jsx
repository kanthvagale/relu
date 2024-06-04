import { useState } from "react";
import { artists } from "../../data/aside/artists/data";
import { photos } from "../../data/aside/photographers/data";
import "./asideRight.scss";
import Artist from "./artist/Artist";
import Photograph from "./photograph/Photograph";

const AsideRight = () => {
  const [swit, setSwit] = useState(true);
  return (
    <div className="asideRight">
      <div className="select">
        <span
          className={swit ? "artist selected" : "artist"}
          onClick={() => setSwit(true)}
        >
          Artist
        </span>
        <span
          className={swit ? "photo" : "photo selected"}
          onClick={() => setSwit(false)}
        >
          Photograph
        </span>
      </div>
      <div className="list">
        {swit ? (
          <div className="art-list">
            {artists.map((artist, ind) => {
              return <Artist key={ind} artist={artist} />;
            })}
          </div>
        ) : (
          <div className="photograph">
            {photos.map((photo, ind) => {
              return <Photograph key={ind} photo={photo} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AsideRight;
