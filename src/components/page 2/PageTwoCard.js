import React from 'react'
import useModal from './useModal'
import Modal from './Modal'
const PageTwoCard = ({ image, title, albumId }) => {
    //console.log('s', props)
   
    const {toggle, visible} = useModal()
    return (
            <tr>
                <Modal image={image} visible={visible} toggle={toggle}/>
                <td><p className='img-url' onClick={toggle}>{image}</p></td>
                <td><p className='img-title' onClick={toggle}>{title}</p></td>
                {/* <button onClick={toggle}>Show Modal</button> */}
                
            </tr>
    )
}

export default PageTwoCard