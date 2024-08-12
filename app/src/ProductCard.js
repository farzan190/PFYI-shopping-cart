const ProductCard=({image,name,category,price,addToCart,id,key,removeFromCart,isCartProduct})=>{
     return <>
       <div key={key} id={id}>
      <img src={image} alt="Product-image"/>
      <div>{name}</div>
      <div>{category}</div>
      <div>{price}</div>
     <div> {isCartProduct && <button id={id} onClick={(e)=>addToCart(e)}>addToCart</button>} </div>      
     <div> {isCartProduct && <button id={id} onClick={(e)=>removeFromCart(e)}>RemoveFromCart</button>} </div>      

      <div>..........</div> 
      </div>
     </>

}

export default ProductCard;