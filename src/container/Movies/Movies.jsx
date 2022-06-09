import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import Movie from '../../components/Movie/Movie.jsx';
import './Movies.scss';



const Movies = props => {
    const {movieType} = useParams();  //Traemos los parametros de la urly los ponemos en la url de la API
    
    const [movies,setMovies] = useState([]);

    useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=9218b9bd6999a8af1b8972bb1b4b815a&language=es-ES`)
        .then(res => setMovies(res.data.results))
        .catch(console.error);        
    },[movieType]);

    return <div className="movies">
        {movies?.map(movie=><Movie key={movie.id} movie={movie}/>)}

    </div>
}

export default Movies;