import React,{useState,useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import axios from "axios"

const API_URL = "https://api.themoviedb.org/3/movie";
const API_KEY="f4c8c309e469484c948afbb6bc839eac"

const MovieDetails = () => {

    const {id}=useParams();
    const [movie,setMovie]=useState(null)

    useEffect(()=>{
        const fetchMovie=async ()=>{
            const response = await axios.get(`${API_URL}/${id}?api_key=${API_KEY}`);
            console.log(`${API_URL}/${id}?api_key=${API_KEY}`);
            setMovie(response.data)
        }
        fetchMovie();
    },[id])

    if(!movie) return <p className='text-center'>Loading...</p>

  return (
    <><div className='p-6 max-w-3xl mx-auto'>
          <h1 className='text-3xl font-bold mb-4'>{movie.title}</h1>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="w-64 mx-auto mb-4" />
          <p><strong>Year:</strong>{movie.release_date?.split("-")[0]}</p>
          <p><strong>Genre:</strong> {movie.genres?.map(g => g.name).join(", ")}</p>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <Link to="/" className="block mt-4 text-blue-500">Back to Search</Link>
    </div>
    </>
  )
}

export default MovieDetails