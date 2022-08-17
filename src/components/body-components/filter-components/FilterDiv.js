import './filter.css'

import { useState } from 'react'


const FilterDiv = (props) =>{

    const [location,setLocation] = useState('')
    const [ptype,setPtype] = useState('')
    const [price,setPrice] = useState('500-4500')
    const [date,setDate] = useState('')

    const viewData = () =>{
        if(location !=='' || ptype !== '' || price !== '' || date !== ''){
            props.onFilter(location,ptype,price,date)
        }
    
    }

    return(
        <div className='filter-div'>
            <div className='filter-div-inner'>
                <h1>Search properties to rent</h1>
                
                <input type='text' onChange={(e) => props.onload(e.target.value)} className='search-bar-input' placeholder='Search with Search bar'></input>
            </div>
            {/* Filter Option Section */}
            <div className='filter-div-inner-sec'>

                <div className='dropdown-div'>
                    <h5 className='sub-text'>Location</h5>
                    <select onChange={(e) => setLocation(e.target.value)} className='filter-dropdown'>
                        <option value=''>All</option>
                        <option value='chennai'>Chennai</option>
                        <option value='bangalore'>Bangalore</option>
                        <option value='mumbai'>Mumbai</option>
                    </select>
                </div>

              <div className='dropdown-div'>
                    <h5 className='sub-text'>When</h5>
                    <input className='filter-dropdown' onChange={(e) => setDate(e.target.value)} type='date' placeholder='Select Move-in Date'/>
                </div>

                <div className='dropdown-div'>
                    <h5 className='sub-text'>Price</h5>
                    <select onChange={(e) => setPrice(e.target.value)} className='filter-dropdown'>
                        <option value='500-6500'>All range</option>
                        <option value='500-2500'>$500-$2,500</option>
                        <option value='2500-4500'>$2,500-$4,500</option>
                        <option value='4500-6500'>$4,500-$6,500</option>
                        <option value='6500-12000'>Above $6,500</option>
                    </select>
                </div>

                <div className='dropdown-div'>
                    <h5 className='sub-text'>Property Type</h5>
                    <select onChange={(e) => setPtype(e.target.value)} className='filter-dropdown'>
                        <option value=''>All</option>
                        <option value='house'>Houses</option>
                        <option value='apartment'>Apartments</option>
                    </select>
                </div>

                <div className='dropdown-div'>
                    <button onClick={viewData} className='search-btn'>Search</button>
                </div>

                
            </div>

        </div>
    )
}


export default FilterDiv