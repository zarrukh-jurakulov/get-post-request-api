import React, {useState} from 'react'
import logo from '../../assets/default.jpg'
const PageOneCard = (props) => {

    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className='pageOneCard' key={props.key}>
            <img className='pageOneImg' src={props.image || logo} alt={props.title} />
            <button className='pageOneInfoBtn' onClick={()=>setShowInfo(!showInfo)}>
                {showInfo ? 'Hide Info' : 'Show Info'  }
            </button>
            {showInfo && <p>{props.title}</p>}
        </div>
    )
}

export default PageOneCard