import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Protected({children, authentication = true}) {
    const navigate = useNavigate();
    const [loader,setLoader] = useState(true);
    const authStatus = useSelector((state) =>state.auth.status);

    useEffect(()=>{
        const authValue = authStatus === true ? true : false;
        if(!authentication &&authValue){
            navigate('/login');
        }else if(authentication && authValue){
            navigate('/signup');
        }
        setLoader(false);
    },[authStatus, authentication, navigate]);
  return loader ? <h1>loading....</h1> : <>{children}</>
}

export default Protected
