import React from 'react'
import data_product from '../Assets/data'
import './Allprod.css'
import Item from '../Item/Item'
const Allprod = () => {
  return (
<div className='allprod'>
    <h1>FEATURED PRODUCTS</h1>
    <hr/>
  <div className="popular-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} 
                new_price={item.new_price} />

            })}
  </div>
  <div className="border">
      <hr/>

  </div>
 

</div>
  )
}

export default Allprod