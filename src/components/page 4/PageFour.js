import axios from 'axios'
import React, {useState} from 'react'
import PageFourCard from './PageFourCard'
import './pageFour.css'

const PageFour = () => {

    const [titleInput, setTitleInput] = useState('')
    const [descInput, setDescInput] = useState('')
    const [myInfo, setMyInfo] = useState([])
    
    
    const handleTitleInput = (event) => {
        setTitleInput(event.target.value)
    }

    const handleDescInput = (event) => {
        setDescInput(event.target.value)
    }

    // Send data with POST method
    const sendBtn  = async()=> {
        let payload = { title: titleInput, desc: descInput };
        let res = await axios.post('https://crudcrud.com/api/882941c92ebd4042957262fa07f0626f/friends', payload);
        console.log(res);
    }

    // Get Data with GET method
    const getData = async () => {
        await axios.get('https://crudcrud.com/api/882941c92ebd4042957262fa07f0626f/friends')
            .then(res => {
            setMyInfo(res.data);
        });
    }
    
    return (
        <div className='pageFour'>
            <div className='inputs-container'>
                <input className='pageFourInputs' onChange={handleTitleInput} type='text' placeholder='Enter Title Name' />
                <input className='pageFourInputs' onChange={handleDescInput} type='text' placeholder='Enter Title Description' />
                <button className='searchButton' onClick={sendBtn}>Send</button>
                <button className='searchButton' onClick={getData}>Get</button>
            </div>
            
            <div>
                {myInfo.map((i, index)=><PageFourCard index={index} id={i._id} title={i.title} desc={i.desc} />)}
            </div>
        </div>
    )
 }

export default PageFour