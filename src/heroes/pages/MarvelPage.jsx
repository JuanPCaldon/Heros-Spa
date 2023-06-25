import React from 'react'
import { HeroList } from '../components/HeroList'

export const MarvelPage = () => {
  return (
   <>

    <h1>Dc Comics</h1>
    <hr />

      <ul> 
        <HeroList publisher = 'Marvel Comics' />
      </ul>
  
   
   </> 
  
  )
}
