import React from 'react';
import './App.css';
import SearchResults from './pages/SearchResult/index';
import Cabecera from './pages/Header/index';
import Home from './pages/Home/index';
import Detail from './pages/Detail/index';
import {PosterContexProvider} from './context/PosterContext';
import { Route } from 'wouter';
import ListOfCategories from 'components/MoviesExample/ListOfCategories';

function App() {
  return (
    <div className="App">
        <section className="App-content">
          <Cabecera />
          <div className='separador'></div>
          <PosterContexProvider>
            <Route className="cabecera" path="/" component={Home} />
            <Route path="/films/:keyword" component={SearchResults} />
            <Route path="/films/id/:id" component={Detail} />
          </PosterContexProvider>
        </section>
        <hr/>
        <section className="categorias">
            <Route path='/' component={ListOfCategories}/>
        </section>
    </div>
  );
}

export default App;
