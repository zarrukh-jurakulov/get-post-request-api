import React, {useState, useEffect} from 'react'
import './pageOne.css'
import PageOneCard from './PageOneCard'
import axios from 'axios'

const PageOne = () => {

    const [pageOneInfo, setPageOneInfo] =useState([])

    useEffect(() => {
       getPageOneInfo()
    }, [])

    const getPageOneInfo = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos/?albumId=2')
        setPageOneInfo(response.data)
    }
   
    return (
        <div id='pageOne'>
            {pageOneInfo.map((i) =><PageOneCard key={i.id} image={i.url} title={i.title} />)} 
        </div>
    )
}

export default PageOne