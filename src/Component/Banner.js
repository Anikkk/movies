import React from 'react';
import {movies} from "./getMovies";


export default function Banner() {
    console.log(movies);
    let movie=movies.results[0];

  return (
      <>
          {movie == '' ? <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
          </div>
              :
              <div className="card banner-card">
                  <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}  alt={movie.title} className="card-img-top banner-img" />
                  <div className="card-body">
                      <h5 className="card-title banner-title">{movie.original_title}</h5>
                      <p className="card-text banner-text">{movie.overview}</p>
                      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  </div>
              </div>
          }
      </>
  )
}
