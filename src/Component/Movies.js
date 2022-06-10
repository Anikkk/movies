import React, { useState } from 'react'
import {movies} from "./getMovies"

export default function () {
    let movie=movies.results;
    const [hover,setHover]=useState('');
  return (
    <>
          {
              movie.length == 0 ? 
              <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
              </div> : 
              <div>
                <h3 className='text-center'><strong>Trending</strong></h3>
                <div className='movie-list'>
                    {
                        movie.map((movieObj)=>(
                            <div className="card movies-card" onMouseEnter={()=>setHover({hover:movieObj.id})} >
                                <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt={movieObj.title} className="card-img-top movie-img" /> 
                                    <h5 className="card-title movies-title">{movieObj.original_title}</h5>
                                    {/* <p className="card-text movies-text">{movieObj.overview}</p> */}
                                <div className='button-wrapper' style={{display:'flex',width:'100%',justifyContent:'center'}}>
                                    <a className="btn btn-primary movie-btn">Add to Favourite</a>
                                </div>
                             </div>
                        ))
                    }
                </div>
                      <div style={{display:'flex',justifyContent:'center'}}>
                          <nav aria-label="Page navigation example">
                              <ul class="pagination">
                                  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                                  <li class="page-item"><a class="page-link" href="#">Next</a></li>
                              </ul>
                          </nav>
                      </div>
              </div>
          }
    </>
  )
}
