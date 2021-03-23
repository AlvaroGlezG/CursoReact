const apiKey = 'b5466b91';

export default async function getDetails({ keyword = 'tt7286456' } = {}) {
    const apiURL = `http://www.omdbapi.com/?i=${keyword}&apikey=${apiKey}`;

    return fetch(apiURL).then(resp => resp.json()).then(respuesta => {
        const Search = respuesta;
        //const { Search = [] } = respuesta;
        //console.log(Search);

        /*const posters = Search(pos => {
            const { Title, imdbID, Released, Runtime, Genre, Director, Plot, imdbRating } = pos;
            return { Title, imdbID, Released, Runtime, Genre, Director, Plot, imdbRating }
        })*/
    
        //const { Title, imdbID, Released, Runtime, Genre, Director, Plot, imdbRating } = Search;
        //return { Title, imdbID, Released, Runtime, Genre, Director, Plot, imdbRating }
        //console.log(posters);
        //return details;
        return Search;
    })
}