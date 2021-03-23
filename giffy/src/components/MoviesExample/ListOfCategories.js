import Category from './CategoryExample';
import {categoriasMovies} from './Categorias';
import { useEffect, useRef, useState } from 'react';

function ListOfCategories () {
    return (<>
        <h2>Peliculas famosas: </h2>
        <div className="separador"></div>
        {categoriasMovies.map((category) => 
            <Category key={category} categoria={category}/>
        )}
    </>);
}

export default function LazyCategories () {
    const [show, setShow] = useState(false);
    const elementRef = useRef();

    useEffect(() => {
        const onChange = (entries, observer) => {
            const el = entries[0];
            if(el.isIntersecting){
                setShow(true);
                observer.disconnect();
            }
        }
        
        const observer = new IntersectionObserver(onChange, { rootMargin: '100px' });
        observer.observe(elementRef.current);
        
        return () => observer.disconnect();
    })

    return <div ref={elementRef}>
            {show ? <ListOfCategories /> : null}
        </div>
    ;
}