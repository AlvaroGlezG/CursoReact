import React from 'react';
import './App.css';
import SearchResults from './pages/SearchResult/index';
import Cabecera from './pages/Header/index';
import Home from './pages/Home/index';
import Detail from './pages/Detail/index';
import {PosterContexProvider} from './context/PosterContext';
import { Route } from 'wouter';

function App() {
  return (
    <div className="App">
          <Cabecera />
        <section>
          <div className='separador'></div>
          <PosterContexProvider>
            <Route className="cabecera" path="/" component={Home} />
            <Route path="/films/:keyword" component={SearchResults} />
            <Route path="/films/id/:id" component={Detail} />
          </PosterContexProvider>
        </section>
    </div>
  );
}

export default App;
