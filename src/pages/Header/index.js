import React from 'react';
import {Link} from 'wouter';
import 'App.css'

export default function Cabecera (){
    return ( <div className='cabecera'>

        <Link to="/">
            <img className="App-logo" alt="Logo" src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png'/>
        </Link>
        <h1>BBDD de películas</h1>
    
    </div>);
}