import './card.css';

const Card = (props) =>{
    return(
        <div className='card'>
            <img className='card-img' src={props.img} alt='property-image'/>
            {props.popular? <div className='badge'>
                <i className='fa fa-star'/>
                <p>POPULAR</p>
            </div>:<div className='badge' style={{backgroundColor:'transparent'}}></div>}
           
            <div className='card-text'>
                <h3 className='price-tag'>${props.price} / month</h3>
                <h3>{props.title}</h3>
                <h4 className='sub-text'>{props.address}</h4>
                <div className='inner-row'>
                    <i className='fa fa-bed'></i><p className='sub-text'>{props.bed} Beds</p>&nbsp;&nbsp;&nbsp;

                    <i className='fa fa-bath'></i><p className='sub-text'>{props.bathroom} Bathrooms</p>&nbsp;&nbsp;&nbsp;

                    <i className='fa fa-square'></i><p className='sub-text'>{props.space} sqft</p>&nbsp;&nbsp;&nbsp;
                </div>
            </div>
        </div>
    )
}

Card.defaultProps = {
    title:'Property Name',
    price:0,
    img:'https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png',
    address:"property address",
    bed:0,
    space:0,
    bathroom:0
}

export default Card