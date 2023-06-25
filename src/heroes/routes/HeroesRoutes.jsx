

import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/NavBAR'
import { DcPages, HeroPage, MarvelPage, Search } from '../pages'

export const HeroesRoutes = () => {
  return (
    <> 

     <Navbar/>

     <div className='container'>

         <Routes>
            <Route path='marvel' element={<MarvelPage/>}/>
            <Route path='dc' element={<DcPages/>}/>

            <Route path='search' element={<Search/> } />
            <Route path='hero/:id' element={<HeroPage/>} />

            
            <Route path='/' element={<Navigate to="/marvel"/>}/>

        </Routes>
    
     </div>

    


    

    </>
  )
}
