import React from 'react'
import { HeroList } from '../components/HeroList'

export const DcPages = () => {
  return (
    <> 
    <h1>Dc Comics</h1>
    <hr />

    <ul> 
       <HeroList publisher = 'DC Comics' />
    </ul>
    
    
    </>
  )
}
