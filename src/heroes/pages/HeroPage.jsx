
import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { heroes } from '../data/heroes';
import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = () => {
  
  const params = useParams();



  const { id }= params;
  
    const hero = useMemo(()=>getHeroById(id.trim()),[id] )

   const navigate = useNavigate();
   const OnReturn= ()=> {
      navigate(-1);
   
    }  
   



 
    if(!hero) {
     
      return <Navigate to="/marvel"/>

    }
      

  return (

    <div className='row mt-5'>
       <div className="col-4">

          <img 
          src={`/assets/heroes/${ id.trim() }.jpg`} 
          alt={hero.superhero} 
          className='img-thumbnail animate__animated animate__fadeInLeft'
          />
       </div>

       <div className='col-8'>
          <h3>{hero.superhero}</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'> <b> Alter ego : </b>{hero.alter_ego} </li>
            <li className='list-group-item'> <b> Publisher : </b>{hero.publisher} </li>
            <li className='list-group-item'> <b> First appearance: </b>{hero.first_appearance} </li>



          </ul>


          <h5 className='mt-3'> Characters </h5>
          <p>{hero.characters}</p>


          <button className='btn btn-outline-primary'
          onClick={OnReturn}
      
          >
            Regresar

          </button>



       </div>
    </div>
      
  
  )
}
