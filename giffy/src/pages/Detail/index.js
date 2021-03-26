import React, {useContext, useEffect, useState} from 'react';
import PosterContext from 'context/PosterContext';
import PosterComp from 'components/Poster/poster';
import getDetails from 'services/getDetails';

export default function Detail ({params}){
    const [result, setResult] = useState();
    let {posters} = useContext(PosterContext);

    //console.log(posters.length);
    if(posters.length === 0){
        posters = JSON.parse(localStorage.getItem('localPosters'));
    }else{
        localStorage.setItem('localPosters', JSON.stringify(posters));
    }

    const posterDetail = posters.find(findPoster => findPoster.imdbID === params.id);

    //console.log(posters);

    //<----Llamada a la API otra vez para coger información extra con la id de imdb---->
    useEffect(() => {
        getDetails({ keyword: posterDetail.imdbID }).then(setResult);
    },[setResult, posterDetail]);
    
    //const {Title} = details;
    //console.log(detalles);
    
    if(result){
        //console.log(result);
        const urlID = `https://www.imdb.com/title/` + result.imdbID;
        return(<div className="posterDetalles">
            <PosterComp className='posterDetail' poster={posterDetail.Poster} id={posterDetail.imdbID}/>
            <div className='detalles'>
                <h2><em>{result.Title}</em></h2>
                <p><strong>Director:</strong> <em>{result.Director}</em></p>
                <p><strong>Año:</strong> <em>{result.Year}</em></p>
                <p><strong>Duración:</strong> <em>{result.Runtime}</em></p>
                <p><strong>Puntuación IMDB:</strong> <em>{result.imdbRating}</em> ⭐</p>
                <p><strong>ID en IMDB</strong>: <em><a href={urlID}>{result.imdbID}</a></em></p>
                <p><strong>Trama:</strong> <em>{result.Plot}</em></p>
            </div>
        </div>);
    }else{return false;}
}