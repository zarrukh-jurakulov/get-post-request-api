import axios from 'axios'
import React, {useState} from 'react'
import './pageThree.css'
import PageThreeCard from './PageThreeCard'
import {BsSearch} from 'react-icons/bs'


const PageThree = () => {
    const [pageThreeInfo, setPageThreeInfo] = useState([])
    const [search, setSearch] = useState('')

    const handleChange = (event) => {
        setSearch(event.target.value)
        
    }

   const searchBtn = async () => {
    const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`)
    setPageThreeInfo(response.data.hits)
   } 
   
    return (
        <div className='pageThree'>
             <div className='searchContainer'>
                 <BsSearch className='searchIcon'/>
                <input className='input'  onChange={handleChange} type = 'search' placeholder='Search...' />
                <button className='searchBtn' onClick={searchBtn}>Search</button>
            </div>
              <div className='page-three-content'>
            
            {pageThreeInfo.map((i)=> <PageThreeCard author={i.author} address={i.url} title={i.title} />)}
        </div>
        </div>
      
    )
}

export default PageThree