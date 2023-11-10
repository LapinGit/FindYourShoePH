import { useContext } from 'react'
import './CSS/Category.css'
import {Context } from '../Context/Context'
import Item from '../Components/Item/Item'

const Category = (props) => {
const {all_product} = useContext(Context);
  return (
<div className='category'>
    <img className='category-banner' src={props.banner} alt="" />
    <div className="category-products">
        {all_product.map ((item,i)=>{
            if (props.category===item.category) {
                return <Item  key={i} id={item.id} name={item.name} image={item.image} 
                new_price={item.new_price} />
            }
            else{
              return null;
            }
        })
      }
      </div>
</div>
  )
}

export default Category;