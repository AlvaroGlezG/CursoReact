import React, { useCallback } from 'react';
import {useLocation} from 'wouter';
import {usePosters} from 'hooks/usePosters';
import SearchResult from 'pages/SearchResult/index';
import LazyCategories from 'components/MoviesExample/LazyCategories';
import SearchForm from 'components/SearchForm';

export default function Home () {
    const [path, pushLocation] = useLocation();
    const { posters } = usePosters();

    const handleSubmit = useCallback(({ keyword }) => {
        pushLocation(`/films/${keyword}`);
    }, [pushLocation]);

    return (<div>

        {/* Formulario */}
        <SearchForm onSubmit={handleSubmit}/>
        {/* Busqueda de los ultimos resultados */}
        <SearchResult params={posters}/>
        {/* Categorias famosas */}
        <LazyCategories />
        {/* Esto es solo para que no de el error de que no se esta utilizando el path */}
        <h4 style={{color: 'rgba(100, 100, 100, 0.281)', position: 'absolute'}}>{path}</h4>
    </div>);
}