import React, { useState, useEffect } from 'react'
import "./App.css"
import Loading from './Loading'
import Tours from './Tours'
import axios from 'axios';
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) =>{
    const newTours = tours.filter((tour)=>tour.id !== id)
    setTours(newTours)
  }

  // fetch Data
  useEffect(() => {
    setLoading(true)
    axios.get(url)
      .then(res=>{ 
        setTours(res.data)
        setLoading(false)
      })
      .catch(err=>console.log(err))
  }, [])

  if(loading){
    return(
      <main >
        <Loading/>
      </main>
    )
  } else if(tours.length === 0){
    return (
      <div className=" text-dark mx-auto w-25 mt-5 text-center">
        <h3>Not More Tour</h3>
        <button
          onClick={() => {
            axios.get(url).then((res) => setTours(res.data));
          }}
          className="btn btn-primary"
        >
          Refresh
        </button>
      </div>
    );    
  }
  
    return (
      <main className="">
        <Tours tours={tours} removeTour={removeTour}/>
      </main>
    )
  }


export default App
