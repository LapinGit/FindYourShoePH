import React, { createContext, useState} from "react";
import all_product from '../Components/Assets/all_product';

export const Context = createContext (null);
const getDefaultBookmarked = () =>{
  let bookmark = {};
  for (let index = 0; index < all_product.length+1; index++) {
    bookmark[index]= 0;
      
  }
  return bookmark;
}
const ContextProdvider = (props)=>{
  const [bookmarkItems, setbookmarkItems]= useState(getDefaultBookmarked());

  const bookmarked= (itemId)=>{
    setbookmarkItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(bookmarkItems);
}
const removeFromList= (itemId)=>{
  setbookmarkItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}

const getTotalBookmarkAmount = () => {
  let totalAmount = 0;
  for(const item in bookmarkItems)
  {
      if (bookmarkItems[item]>0)
      {
      let itemInfo = all_product.find((product)=>product.id === Number(item))
      totalAmount += itemInfo.new_price * bookmarkItems[item];  
      }
      
  }
  return totalAmount;
}
const getTotalBookmarkItems = () => {
  let totalItem=0 ;
  for (const item in bookmarkItems)
  {
      if(bookmarkItems[item]>0)
      {
          totalItem+= bookmarkItems[item];
      }
  }
  return totalItem;
} 



    const contextValue = {getTotalBookmarkItems,getTotalBookmarkAmount,all_product,bookmarkItems,bookmarked,removeFromList};
      return( 
       <Context.Provider value={contextValue}>
        {props.children}
        </Context.Provider>
  )

}
export default ContextProdvider;