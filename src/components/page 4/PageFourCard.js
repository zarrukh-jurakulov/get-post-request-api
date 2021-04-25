import React, {useState} from 'react'
import axios from 'react'

const  PageFourCard = ({id, index, title, desc}) => {

    const [updateTitle, setUpdateTitle] = useState('');
    const [updateDesc, setUpdateDesc] = useState('');
    const [showInput, setShowInput] = useState(false)

    const handleUpdateTitle = (e) => {
        setUpdateTitle(e.target.value)
    }

    const handleUpdateDesc = (e) => {
        setUpdateDesc(e.target.value)
    }
    
    // Update data with PUT method
    const updateData = async () => {
        // let payload = { title: updateTitle, desc: updateDesc };
        // console.log('id', id)
        // console.log('updateTitle', updateTitle)
        // console.log('updateDesc', updateDesc)
        // await axios.put(`https://crudcrud.com/api/882941c92ebd4042957262fa07f0626f/friends/${id}`, payload).then(i=> console.log('f', i));
    }

    // Delete data with DELETE method
    const deleteData = () => {
        axios.delete('https://crudcrud.com/api/882941c92ebd4042957262fa07f0626f/friends', 
            { data: { foo: "bar" }, 
              headers: { "Authorization": "***" },
              params: {index},
            });
    }   
    return(
        <div className='pageFourCard'>
            {showInput &&
            <div className='input-container'>
               <input className='update-input' type='text' placeholder = 'Update Your Title' onChange={handleUpdateTitle} />
               <input className='update-input' type='text' placeholder = 'Update Your Desc' onChange={handleUpdateDesc} />
               <button className='update-btn' onClick={updateData}>Update Info</button>   
            </div>}
            
            <div className='card-info'>
                <div className='card-header' key={index}>
                   
                    <h3>{title}</h3>
                </div>
                <div className='card-desc'>
                    <p>{desc}</p>
                </div>
            </div>
            <div className='buttons-container'>
                <button className='card-main-btn updateShowBtn' onClick={()=>setShowInput(!showInput)}>{showInput ? 'Update' : 'Update'}</button>
                <button className='card-main-btn deleteBtn' onClick={deleteData}>Delete</button>
            </div>
        </div>
    )
}   

export default PageFourCard