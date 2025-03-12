import {useState} from "react";
import axios from "axios";

const Dictionary=()=>{
    const [word,setWord]=useState("")
    const [result,setResult]=useState(null)
    const [error,setError]=useState("")

const fetchDefinition=async ()=>{
    if(!word) return;

    try{
        setError("")
        const {data}= await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        setResult(data[0])

    }catch(err){
        setError("Word Not Found.Try another One")
        setResult(null)
    }
}


    return(
        <div className="flex flex-col items-center p-6 max-w-md mx-auto bg-gray-100 shadow-lg rounded-xl">
            <h1 className="text-2xl font-bold mb-4">Dictionary App</h1>
                <input 
                    type="text"
                    placeholder="Enter a Word..."
                    className="border p-2 w-full rounded-lg"
                    value={word}
                    onChange={(e)=>setWord(e.target.value)}
                />
                <button 
                    onClick={fetchDefinition}
                    className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg" 
                >
                    Search
                </button>

                {error  && <p className="text-red-500 mt-3">{error}</p>}

                {result && (

                    <div className="mt-4 p-4 bg-white rounded-lg shadow-mg">
                        <h2 className="text-xl font-semifold">{result.word}</h2>
                        <p className="italic text-gray-500">{result.phonetic}</p>
                        <p className="mt-2"><strong>Definition:</strong>{result.meanings[0].definitions[0].definition}</p>
                        {result.meanings[0].definitions[0].examples &&(
                            <p className="mt-2"><strong>Example:</strong>"{result.meanings[0].definitions.example}"</p>
                        )}
                    </div>
                )}
        </div>
    )
}

export default Dictionary;                      