import React from 'react'
import './Mask.css'
import mask1 from '../Assets/mask1.png'
import mask2 from '../Assets/mask2.png'
import mask3 from '../Assets/mask3.png'
const Mask = () => {
  return (
    <div className ='mask'>
      <div className="mask-left">
        <h>Toner</h>
        <p>Total 3 Products</p>
      </div>
    <div className='mask-right'>
      <div className="mask1div">
      <img className='mask1' src={mask1} alt=""/>
      </div>
      <div className="mask2div">
      <img className='mask2' src={mask2} alt=""/>
      </div>
      <div className="mask3div">
      <img className='mask3' src={mask3} alt=""/>
      </div>
    </div>
    </div>
  )
}

export default Mask