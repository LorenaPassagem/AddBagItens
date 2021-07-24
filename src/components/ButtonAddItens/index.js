import React, {useState} from 'react';
import './styles.css'

const ButtoAddItens = () => { 
 const [item, setItem]  = useState(0);
      
 return (
     <>
        <p class='item'>  {item} </p>
        <button onClick = {() => setItem(item + 1) }>Add item o carrinho</button>
     </>
 )
}
export default ButtoAddItens;