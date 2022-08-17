import './body.css'
import CardDiv from './card-components/CardDiv'


import { useState,useEffect } from 'react'

const Body = () =>{
    const [search,setSearch] = useState('') 


    useEffect(() => {
    },[search]);

    return(
        <div className="body-div">
            <div className='body-inner'>
                
               <CardDiv  search={search}/>
                
            </div>
            
        </div>
    )
}

export default Body