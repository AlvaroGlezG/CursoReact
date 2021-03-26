import React from 'react';
import Cargando from 'components/Cargando/cargando';
import ListOfPosters from 'components/ListOfPosters/listOfPosters'
import {usePosters} from 'hooks/usePosters';

export default function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, posters } = usePosters({keyword});

  return <div className="App-content">
    {(loading)
      ? <Cargando/>
      : <ListOfPosters posters={posters}/>
        
    }

  </div>
}

