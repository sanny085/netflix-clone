import React from 'react'
import './Banner.css';

const Banner = () => {

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + "...." : string;
    }
    return (
        <header className="banner" style={{  
            backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC")`}}>

            <div className="banner__contents">
              <h1 className="banner__title">Movie name</h1>
               <div className="banner__buttons">
                   <button className="banner__button">Play</button>
                   <button className="banner__button">My List</button>
               </div>
               <h1 className="banner__description">
                 {
                  truncate(`This is test description. This is test description.
                 This is test descriptionThis is test descriptionThis is test descriptionThis is test 
                 descriptionThis is test descriptionThis is test descriptionThis is test description`,150)
                 }
               </h1>
            </div>

            <div className="banner--fadeBottom"/>
        </header>
    )
}

export default Banner
