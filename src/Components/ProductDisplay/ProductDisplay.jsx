import React, { useContext } from 'react'
import './ProductDisplay.css'
import { Context } from '../../Context/Context'


const ProductDisplay = (props) => {
const {product} = props;
const {bookmarked}= useContext(Context);

  return (
<div className='productdisplay'>
    <div  className='productdisplay-left'>
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' 
            src={product.image} alt="" />
        </div>
    </div>

    <div className="productdisplay-right">
        <h1>{product.name}</h1>

  
    <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-new">${product.new_price}</div>      
    </div>
    <div className="productdisplay-right-description">
    Lorem ipsum dolor sit amet. Quo unde itaque aut fugiat quia sit nihil pariatur et 
    ratione consequatur. At galisum ipsam qui incidunt atque quo excepturi velit 
    aut autem officiis et consequuntur minus est velit omnis qui minima tempore. Sit 
    impedit inventore ut minima ipsum ut quaerat dolore qui asperiores quam a quaerat 
    laboriosam ut rerum esse At autem amet.
    </div>
    <div className="productdisplay-right-size">
        <h1>Select Size</h1>
        <div className="productdisplay-right-sizes">
            <div>8</div>
            <div>8.5</div>
            <div>9</div>
            <div>9.5</div>
            <div>10</div>
        </div>
        <button onClick={()=>{bookmarked(product.id)}}>BOOKMARK</button>
    </div>
    </div>
</div>
  )
}

export default ProductDisplay