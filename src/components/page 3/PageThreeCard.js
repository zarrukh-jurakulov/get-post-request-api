import React, {useState} from 'react'

const PageThreeCard = (props) => {

    const [showMore, setShowMore] = useState(false)
    

    return (
        <div className='pageThreeCard'>
            <div>
                  <p>{props.title}</p>
            <button className='pageThreeInfoBtn' onClick={()=> setShowMore(!showMore)}>
                {showMore ? 'Show Less' : 'Show More'}
            </button>
            { showMore &&
                <div>
                    <a href={props.address}>{props.address}</a>
                    <p>Author : {props.author}</p>  
                </div>
            }  
            </div>
       
            
            <button className='selectBtn'>Select</button>
           
            
        </div>
    )
}

export default PageThreeCard