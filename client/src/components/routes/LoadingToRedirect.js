import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const LoadingToRedirect = () => {
    const [ count , setcount] = useState(3)
    const navigate =useNavigate()

    useEffect(() =>{
        const interval = setInterval(()=>{
            setcount((currentCount) => -- currentCount)
        },1000)
        // redirect
        count === 0 && navigate('/')

        return () => clearInterval(interval)

    },[count])

  return (
    <div>
        <h1>No Permission , redirect in {count}</h1>
    </div>
  )
}

export default LoadingToRedirect
