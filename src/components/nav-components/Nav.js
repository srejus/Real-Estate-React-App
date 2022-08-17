import './nav.css';

const Nav = () =>{
    return(
        <div className='NavDiv'>
            <h1>Estate</h1>

            <div className='inner-nav'>
                <div className='nav-item-div'>
                    <button className='nav-btn active'>Rent</button>
                </div>

                <div className='nav-item-div'>
                    <button className='nav-btn'>Buy</button>
                </div>

                <div className='nav-item-div'>
                    <button className='nav-btn'>Sell</button>
                </div>


                <div className='nav-item-div'>
                    <button className='nav-btn'>Manage Property</button>
                </div>

                <div className='nav-item-div'>
                    <button className='nav-btn'>Resources</button>
                </div>
            </div>
            
            <div className='right-div' align="right">
                <button className='nav-btn'>Login</button>
                <button className='nav-btn sec-btn'>Sign up</button>
            </div>
            
               
        </div>
    )
}

export default Nav