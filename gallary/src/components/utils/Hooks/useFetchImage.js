import { useState, useEffect } from "react";
import axios from 'axios';

export default function useFetchImage(page, search) {
    const [myImage, setMyImage]= useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const api = process.env.REACT_APP_UNSPLASH_API;
    const key = process.env.REACT_APP_UNSPLASH_KEY; 

    const [errers, setErrers] = useState([])

    function fetchRandom(res){
            setMyImage([...myImage, ...res.data]);
            setIsLoading(false)
    }

    function fetchSearch(res){
        if(page > 1){
          setMyImage([...myImage, ...res.data.results])  
        } else {
          setMyImage([...res.data.results])
          }
        
    }


    useEffect(() => {
        setIsLoading(true)
        const url = search == null ? `photos? `: `search/photos?&query=${search}`
        axios.get(`${api}/${url}&client_id=${key}&page=${page}`)
      .then(res=>{
      if(search === null){
        fetchRandom(res)
      }else{
        fetchSearch(res)
      }
      }).catch(err=>{
          setErrers(err.response.data.errors)
          setIsLoading(false)
        })
        setIsLoading(false)
    }, [page, search])
     
    return [myImage, setMyImage, errers, isLoading];

}
