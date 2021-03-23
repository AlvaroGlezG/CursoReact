import React, {useState} from 'react';

const Context = React.createContext({});

export function PosterContexProvider ({children}) {
    const [posters, setPosters] = useState([]);

    return <Context.Provider value={{posters, setPosters}}>
        {children}
    </Context.Provider>
}

export default Context;