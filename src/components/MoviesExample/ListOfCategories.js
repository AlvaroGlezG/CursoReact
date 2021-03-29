import Category from './CategoryExample';
import { categoriasMovies } from './Categorias';

export default function ListOfCategories() {
    return (<>
        <h2>Peliculas famosas: </h2>
        <div className="separador"></div>
        {categoriasMovies.map((category) =>
            <Category key={category} categoria={category} />
        )}
    </>);
}