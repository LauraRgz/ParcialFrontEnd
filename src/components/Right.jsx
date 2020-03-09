import React from "react";
import "./styles.css";

const Right = props => {
    const ep = props;
    // const close = props;
    // const onX = props.onX;
    //console.log(ep.episode);
    // console.log(close.close);
  return (
    <div className="Right">
      <h1>Episode</h1>
      {/* <div className="Film" onClick={props.onX()}> X </div> */}
      <div className="Info" key={ep.episode.id}>
        <img className="ImgData" src={ep.episode.image} alt={ep.episode.title} />
        <div className="EpisodeData"><h2>Title:</h2> {ep.episode.title}</div>
        <div className="EpisodeData"> <h2>Director:</h2> {ep.episode.director}</div>
        <div className="EpisodeData"> <h2>Producer:</h2> {ep.episode.producer}</div>
        <div className="EpisodeData"> <h2>Date:</h2> {ep.episode.release_date}</div>
        <div className="EpisodeData"> <h2>Opening:</h2> {ep.episode.opening_crawl}</div>
        <div className="EpisodeData">
          {" "}
          <h2>Cast:</h2>
          {ep.episode.characters.map(character => (
            <div className="Character" key={character.id}>
              <img className="CharacterInfo" src={character.image} alt={character.name}/>
              <div className="CharacterData"><h3>Character:</h3> {character.name}</div>
              <div className="CharacterData"><h3>Actor:</h3>{character.actor}</div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Right as default };