import PosterComp from 'components/Poster/poster';
import React from 'react';
import "App.css";

export default function ListOfPosters({posters}){
    // console.log(posters);
    return (<>
        {posters.map(({ Title, Poster, imdbID }) =>
            <PosterComp key={imdbID} id={imdbID} title={Title} poster={Poster}/>     
        )}
        
    </>);
}