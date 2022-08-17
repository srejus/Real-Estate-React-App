import Card from './Card';
import FilterDiv from '../filter-components/FilterDiv'
import './card.css';

import Record from './db.json';

import { useState,useEffect } from 'react';

const CardDiv = (props) =>{

    const [search,setSearch] = useState('')

    // Filter states
    const [location,setLocation] = useState('')
    const [ptype,setPtype] = useState('')
    const [date,setDate] = useState(new Date('2025-10-12'))
    const [price,setPrice] = useState('')

    const[p1,setP1] = useState(500)
    const [p2,setP2] = useState(6500)

    

    const getSearch = (search) =>{
        setSearch(search)
    }

    const getFilter = (location,ptype,price,date) =>{
        setLocation(location)
        setPtype(ptype)
        setPrice(price)
        
        if(date !== ''){
            let dt = new Date(date)
            setDate(dt)
        }
        

        getPrice(price)
    }

    const getPrice = (price_range) =>{
        var res = price_range.split("-")
        var num1 = parseInt(res[0])
        var num2 = parseInt(res[1])

        setP1(num1)
        setP2(num2)
        
        
    }

    useEffect(() => {

    },[search,location,ptype,price]);

    return(
        <div>
            <FilterDiv onload={getSearch} onFilter={getFilter}/>
            
            <div className='card-div'>
            { Record.filter((d) => d.title.toLowerCase().includes(search))
            .filter((d) => d.location.toLowerCase().includes(location))
            .filter((d) => Date.parse(d.date_shift) <= date)
            .filter((d) => d.ptype.toLowerCase().includes(ptype))
            .filter((d) => d.price > p1 && d.price < p2)
            
            .map((d) =>(
                <Card key={d.id} title={d.title} img={d.img} price={d.price} bed={d.beds} bathroom={d.bathroom} space={d.space} popular={d.featured} address={d.address}/>
                ))}
                
             
            </div>
        </div>
    )
}

export default CardDiv