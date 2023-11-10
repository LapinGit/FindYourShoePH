import React from 'react'
import './Body.css'
import banner1 from '../Assets/banner1.jpg'
import banner2 from '../Assets/banner2.jpg'
import banner3 from '../Assets/banner3.jpg'

const Body = () => {
  return (
<div className="body">
  <div className='bodycontainer'>
    <img className='pic' id='pic3' src={banner1} alt='1'/>
    <img className='pic' id='pic2' src={banner2} alt='2' />
    <img className='pic' id='pic1' src={banner3} alt='3' />
 </div> 
</div>
  )
}
export default Body