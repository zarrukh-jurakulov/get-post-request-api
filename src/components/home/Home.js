import React, {useState, useEffect} from 'react'
import HomeCard from './HomeCard'
import './home.css'
import axios from 'axios'

const Home = () => {    
     
    const [information, setInformation] = useState([])

    useEffect(() => {
        getInformation()
    }, [])
   const  getInformation = async () => {
       const response = await axios.get('https://jsonplaceholder.typicode.com/photos/?albumId=1')
       setInformation(response.data)
   }

    
    console.log(information);

    return (
        <div id='home' >
               {information.map((i)=><HomeCard key={i.id} image={i.url} title={i.title} />)} 
        </div>
    )
}

export default Home