import './App.css';
import { useState} from "react";
import data from "./data.json"
import ProductCard from './ProductCard';

function App() {
  const [products,setProducts]=useState(data);
  const [cart,setCart]=useState([])

   const addToCart=(e)=>{
       const cartProducts=  data.filter((item,index)=>   index+1==e.target.id ? true:false);
     //  console.log(cartProducts);
       setCart([...cart,cartProducts]);
       console.log(cart);
      }

   const removeFromCart=(e)=>{
       const filteredCartItems=  cart.filter((item,index)=>index==e.target.id ?false:true);
       console.log(filteredCartItems);
       setCart([...filteredCartItems]);
   }   

  const subTotal=()=>{
     const cost= cart.map((item)=>item[0].price);
     console.log(cost);

  }

  return  <div> <div>{products.map((item,index)=><ProductCard 
                                           key={index}
                                           image={item.image.desktop}
                                           id={index+1}
                                           name={item.name} 
                                           category={item.category}
                                           price={item.price} 
                                           addToCart={addToCart}
                                           isCartProduct={true}
                                           />)}</div>;

         <div> {  cart.map((item,index)=><ProductCard 
                                                name={item[0].name} 
                                                category={item[0].category}
                                                price={item[0].price}
                                                id={index} 
                                                removeFromCart={removeFromCart}
                                                isCartProduct={true}
      />)}</div>
         </div>                                  

}

export default App;
