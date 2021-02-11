import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Movie.css'

 const Movie= ({id,year,title,summary,poster,genres})=>{
   return  (<div className='movie'>
       <img src={poster} alt='poster' title={title}></img>
       <div className='movie__column'> 
   <h3 className='movie__title'>{title}</h3>
   <ul className='movie__genres'>
       {genres.map((genre, index)=>{
           return (
               <li  key = {index}className='genres__genre'>{genre}</li>
           )
       })}
   </ul>
   <h5 className='movie__year'>{year}</h5>
   <p className='movie__summary'>{summary}</p>
   
   </div>
   </div>
   )}


Movie.propTypes={
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;