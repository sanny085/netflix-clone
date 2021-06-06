import React from 'react'
import './Banner.css';

const Banner = () => {
    return (
        <header className="banner" style={{  
            backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC")`}}>

            <div className="banner__contents">
              <h1 className="banner__title">Movie name</h1>
               <div className="banner__buttons">
                   <button className="banner__button">Play</button>
                   <button className="banner__button">My List</button>
               </div>
               <h1 className="banner__description">This is test description</h1>
            </div>

            <div className="banner--fadeBottom"/>

        </header>
    )
}

export default Banner
