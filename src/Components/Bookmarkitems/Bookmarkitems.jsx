import React, {useContext} from 'react'
import './Bookmarkitems.css'
import { Context } from '../../Context/Context'
import remove_icon from '../Assets/cart_cross_icon.png';

const Bookmarkitems = () => {
    const {getTotalBookmarkAmount,all_product,bookmarkItems,removeFromList}= useContext(Context);
  return (
<div className='bookmarkitems'>
<div className="bookmark-container">
    <div className="bookitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
    </div>
    <hr/>
    {all_product.map ((e)=> {
            if(bookmarkItems[e.id]>0)
            {
                return(<div>
                    <div className="bookitems-format-item">
                    <img src={e.image} alt="" className='bookicon-product-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='bookitems-quantity'>{bookmarkItems[e.id]}</button>
                    <p>${e.new_price*bookmarkItems[e.id]}</p>
                    <img className='bookitems-remove-icon' src={remove_icon} onClick={()=>{removeFromList(e.id)}} alt="" />
                    </div>
                    <hr />
                    </div>
                )
            }
            return null;
        })} 
    </div>
    <div className="bookitems-down">
            <div className="bookitems-total">
           
                <div>
                    <div className="bookitems-total-item">
                        <h3>Total:</h3>
                        <h3>${getTotalBookmarkAmount()}</h3>
                    </div>
                </div>
    
            </div>
        </div>
</div>

  )
}

export default Bookmarkitems