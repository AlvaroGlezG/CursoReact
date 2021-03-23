import React, {useState} from 'react';
import {useLocation} from 'wouter';
import SearchResult from 'pages/SearchResult/index';

export default function Home () {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();

    const handleSubmit = evt => {
        evt.preventDefault();
        pushLocation(`/films/${keyword}`);
    }
    const handleChange = evt => {
        setKeyword(evt.target.value);
    }

    return (<div>

        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} placeholder="Search for a film" type="text"></input>
        </form>

        <SearchResult params={keyword}/>

    </div>);
}