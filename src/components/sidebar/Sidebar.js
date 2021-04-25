import React from 'react'
import {Link} from "react-router-dom";
import './sidebar.css'
import ReactTooltip from 'react-tooltip';
import { AiOutlineTable } from 'react-icons/ai'
import { CgSearchLoading } from 'react-icons/cg'
import { GiPlayerBase } from 'react-icons/gi'
import { ImGrin } from 'react-icons/im'
// import logo from './logo.svg';
const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <aside>
                <div className='logos-container'>
                    <Link to='/'><img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt='logo' /></Link>
                    <img className='infoLogo' data-tip='Hello World. This is a React js project' src='https://wwwn.cdc.gov/norsdashboard/Resources/Info_icon-72a7cf.svg'  alt='logo' />
                    <ReactTooltip />
                </div>
               
                <ul>
                    <li><Link to="/"><GiPlayerBase className='icons' />Home</Link></li>
                    <li><Link to="/page1"><ImGrin className='icons' />Page 1</Link></li>
                    <li><Link to="/page2"><AiOutlineTable className='icons' />Page 2</Link></li>
                    <li><Link to="/page3"><CgSearchLoading className='icons' />Page 3</Link></li>
                    <li><Link to="/page4"><CgSearchLoading className='icons' />Page 4</Link></li>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar

// post 
// https://crudcrud.com/api/3f8481793c6c4c64a46207b1d0a283f3/cars


// get 
// https://crudcrud.com/api/3f8481793c6c4c64a46207b1d0a283f3/cars

