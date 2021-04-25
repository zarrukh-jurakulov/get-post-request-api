import React, { useState, useEffect } from 'react'
import './pageTwo.css'
import PageTwoCard from './PageTwoCard'
import axios from 'axios'




const PageTwo = () => {

    const [pageTwoInfo, setPageTwoInfo] = useState([])
    
    useEffect (()=>{
        getPageTwoInfo()
    },[])

    const getPageTwoInfo = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos/?albumId=3')
        setPageTwoInfo(response.data)
    }

    return (
        <div className = 'page-two'>
            <table>
                <tr>
                    <th>Image url</th>
                    <th>Title</th>
                </tr>
                 {pageTwoInfo.map((i)=><PageTwoCard key={i.id} image={i.url} title={i.title} albumId={i.albumId} />)}
            </table>
           
           
        </div>
    )
}

export default PageTwo