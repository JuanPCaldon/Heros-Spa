import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AutContext } from '../context/AuthContext';

export const LoginPage = () => {

  const {login} = useContext(AutContext)
  const navigate = useNavigate();


    

  const onlogin =()=>{
    login('juan caldon')

    
    navigate('/',{
       replace: true


    });
  }


  return (
   
    <div className=' mt-5'>
      <h1> Login </h1>
      <hr />

      <button className='btn btn-primary'
      onClick={onlogin}
      >
        Login


      </button>





    </div>
  )
}
