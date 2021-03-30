import React from 'react';
import Category from './CategoryExample';
import { categoriasMovies } from './Categorias';

function ListOfCategories() {
    return (<>
        <h2>Peliculas famosas: </h2>
        <div className="separador"></div>
        {categoriasMovies.map((category) =>
            <Category key={category} categoria={category} />
        )}
    </>);
}

export default React.memo(ListOfCategories);