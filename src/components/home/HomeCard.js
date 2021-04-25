import React, {useState} from 'react'
import './home.css'
import logo from '../../assets/default.jpg'

const HomeCard = (props) => {

    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className='homeCard' key={props.key}>
            <img className='homeImage' src={props.image || logo} alt={props.title} />
            <button className='infoBtn' onClick={()=>setShowInfo(!showInfo)}>
            {showInfo ? 'Hide info' : 'Show Info'}
            </button>
            
            {showInfo && <p>{props.title}</p>}
        </div>
    )
}

export default HomeCard