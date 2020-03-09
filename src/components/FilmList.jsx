import React from "react";
import "./styles.css";
//import FilmsList from "./FilmsList";

const FilmList = props => {
  const { data, onBigPicture } = props;
  //console.log(data.films);

  return (
    <div className="Films">
      <h1>Episodes</h1>
      {data.films.map(film => (
        <div
          className="Film"
          key={film.id}
          onClick={() => onBigPicture(film.title)}
        >
          <img className="FilmPoster" src={film.image} alt={film.title} />
          <div className="FilmData">{film.title}</div>
          <div className="FilmData">Episode: {film.episode_id}</div>
        </div>
      ))}
    </div>
  );
};
export { FilmList as default };