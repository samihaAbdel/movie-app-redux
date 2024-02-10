import React from 'react';
import './App.css';
import ListeMovie from './Components/ListeMovie/ListeMovie';
import AddMovie from './Components/AddMovie/AddMovie';
import FilterName from './Components/FilterByName/FilterName';
import FilterRate from './Components/FilterByRate/FilterRate';

function App() {
  return (
    <div className="App">
    <h1>Movie App with Redux</h1>
    <FilterName/>
    <FilterRate/>
    <AddMovie/>
    <ListeMovie/>
    </div>
  );
}

export default App;
