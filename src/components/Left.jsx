import React from "react";
import FilmList from "./FilmList";
import Right from "./Right";
import "./styles.css";

const Body = props => {
  const { onBigPicture} = props.onClick;
  let data = props.data;
//   console.log(data.films);

  let episode;

  if (data.bigPicture != null) {
    episode = data.films.find(obj => obj.title === data.bigPicture);
  }
//console.log(episode);

  return (
    <div className="body">
        <div className="DetailsLeft">
       <FilmList onBigPicture={onBigPicture} data={data}/>
       </div>
       {data.bigPicture === null ? ( null) : (
      <div className="DetailsRight">
        <Right episode = {episode} />
      </div>
    )}
    </div>
    
  );
};

export { Body as default };