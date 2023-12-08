import React from 'react'
import SuprisedDog from '../assets/supriseddog.webp'
const NotFound = () => {
    return (
        <>
        <div className='notfound-container'>
        <img src={SuprisedDog} />
        <h1> No Page Found!!!!</h1>
        </div>
        </>
    )
}
export default NotFound