import React, {useState} from 'react';

function SearchForm({ onSubmit }){
    const [keyword, setKeyword] = useState('');

    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit({ keyword });
    }

    const handleChange = evt => {
        setKeyword(evt.target.value);
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} placeholder="Search for a film" type="text" value={keyword}></input>
        </form>
    </>);
}

export default React.memo(SearchForm);