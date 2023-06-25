

import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/UseForm'
import queryString from 'query-string'
import { HeroCard } from '../components/HeroCard'
import { getHeroByName } from '../helpers/getHeroByName'



export const Search = () => {


  const navigate = useNavigate();
  const location = useLocation();


  const {q=''}= queryString.parse(location.search)


  const heroes = getHeroByName(q);


 const {searchtext,onInputChange} = useForm({

    searchtext : ''

 })
  
const onSearchsubmit = (event) =>{
  event.preventDefault();

  if(searchtext.trim().length <= 1) return;

  navigate(`?q=${searchtext}`)


}



  return (
   
    <>
        <h1>Search</h1>
        <hr />

        <div className='row'>
             <div className="col-5">

                  <h4> Searching </h4>
                  <hr />

                  <form onSubmit={onSearchsubmit}>

                        <input type="text"
                        placeholder='Search a Hero'
                        className='form-control'
                        name='searchtext'
                        autoComplete='off'
                        value={searchtext}
                        onInput={ onInputChange}
                        />

                        <button className='btn btn-outline-primary mt-1'>
                          Search
                        </button>

                        </form>
             </div>


             <div className="col-7">
                  <h4> Results</h4>
                  <hr />


                  {
                      (q=='')
                      ? <div className='alert alert-primary'> Search a Hero </div>
                      :(heroes.length== 0 ) &&      <div className=' alert alert-danger'>No hero With <b>{q}</b></div>



                  }




             
                  {  heroes.map(hero =>(

                       <HeroCard key={hero.id}{...hero}/> 


                  ))




                  }

                

              </div>
       </div>


       

     
    
    
    
    
    </>
  )
}
