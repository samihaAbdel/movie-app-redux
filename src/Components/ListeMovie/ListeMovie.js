import React from 'react'
import { useSelector } from 'react-redux'
import CardMovie from '../../Components/CardMovie/CardMovie';
import "./ListeMovie.css"

export default function ListeMovie() {
  const movies = useSelector((state) => state.movieReducer.moviesData);
  return (
 
    <div>
      <h2>Movie List</h2>
      <div className="movies">
      {movies.map(movie => <CardMovie key={movie.id} movie={movie} />)} 
      </div>
            
       
    </div>
  )
}
