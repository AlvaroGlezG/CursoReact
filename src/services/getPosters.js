const apiKey = 'b5466b91';

const fromApiResponseToPosters = apiResponse => {
    // console.log(apiResponse);
    const { Search = [] } = apiResponse;
    // console.log(Search);
    if (Array.isArray(Search)) {
        const posters = Search.map(poster => {
            const { Poster, Title, imdbID } = poster;
            return { Poster, Title, imdbID };
        })
        return posters;
    }

    return [];
}

export default async function GetPosters({ keyword = 'batman' } = {}) {
    const apiURL = `https://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}&type=movie`;
    
    return fetch(apiURL)
        .then((res) => res.json())
        .then(fromApiResponseToPosters);
}
    
    // const [posters, setPosters] = useState();

    // return fetch(apiURL).then(resp => resp.json()).then(respuesta => {

    // const { Search = [] } = respuesta;
    // console.log(Search);
    //useEffect(() => {
    // Search.map(pos => {
    // setPosters({pos});
    // const { Poster, Title, imdbID } = pos;
    // setPosters( { Poster, Title, imdbID } );
    // })
    //},[setPosters])
    // return Search;
    // })


