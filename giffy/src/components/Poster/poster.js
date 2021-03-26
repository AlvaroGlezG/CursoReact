import React from 'react';
import 'App.css';
import {Link} from 'wouter';

function PosterComp({ poster, title, id} = {className : 'null'} ) {

    if(poster !== "N/A"){
        return (<div>
            <Link to={`/films/id/${id}`}>
                {/* <h3 className="posterTitle">{title}</h3> */}
                <img loading="lazy" className="posterImg" id={id} alt={title} src={poster}/>
            </Link>
        </div>)
    }else{
        return false;
    }

}

export default React.memo(PosterComp);