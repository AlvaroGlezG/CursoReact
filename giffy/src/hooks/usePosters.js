import { useState, useEffect, useContext } from 'react';
import getPosters from 'services/getPosters';
import PosterContext from 'context/PosterContext';

export function usePosters({ keyword } = {}) {
  const [loading, setLoading] = useState(false);
  const { posters, setPosters } = useContext(PosterContext);

  const keywordToUse = keyword || localStorage.getItem('localKeyword') || 'avengers';
  //let keywordToUse = keyword ? keyword : localStorage.getItem('localKeyword');
  //if(keywordToUse === 'undefined'){ keywordToUse = 'avengers' }

  useEffect(() => {
    setLoading(true);
    getPosters({ keyword: keywordToUse }).then(poster => {
      setPosters(poster);
      setLoading(false);
      localStorage.setItem('localKeyword', keywordToUse);
    });
  }, [keyword, setPosters])
  // console.log(posters);
  return { loading, posters };
}