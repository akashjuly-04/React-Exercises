import React,{ useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import './App.css'

const API_URL="https://api.themoviedb.org/3/search/movie"
const API_KEY="f4c8c309e469484c948afbb6bc839eac"

function App() {
  const [search,setSearch] = useState("")
  const [movies,setMovies]=useState([])

  const fetchMovies= async ()=>{
    if(search.trim()==="") return;
    const response=await axios.get(`${API_URL}?api_key=${API_KEY}&query=${search}`)
    setMovies(response.data.results || [])
  }

  return (
    <div className='p-6 max-w-3xl mx-auto text-center'>
      <h1 className='text-3xl font-bold mb-4'>
          Movies Search App
      </h1>
      <input 
        type="text"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder='Search for Movie...'
        className='border p-2 w-full mb-4'
      />
      <button onClick={fetchMovies} className='bg-blue-500 text-white p-2 rounded'>Search</button>
      <div className='mt-6'>
        {
          movies.map((movie)=>
            <Link to={`/movie/${movie.id}`} key={movie.id} className="block mb-4">
              <div className='border p-4 flex items-center'>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="w-16 h-24 mr-4" />
                  <p>{movie.title} ({movie.release_date?.split("-")[0]})</p>
              </div>
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default App
