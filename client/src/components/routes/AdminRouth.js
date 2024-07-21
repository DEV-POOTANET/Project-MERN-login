import React, { useEffect, useState } from 'react'
import {useSelector } from 'react-redux'
import LoadingToRedirect from './LoadingToRedirect'
import { currentAdmin} from '../function/auth'

const AdminRouth = ({children}) => {
    const {user} = useSelector((state) => ({...state}))
    const [ok , setOk]  = useState(false)

    useEffect(()=>{
        if(user && user.token){
          currentAdmin(user.token)
          .then(res =>{
            console.log(res)
            setOk(true)
          }).catch(err=>{
            console.log(err)
            setOk(false)
          })
        }
    },[])

  return ok
  ? children
  : <LoadingToRedirect/>

}

export default AdminRouth
