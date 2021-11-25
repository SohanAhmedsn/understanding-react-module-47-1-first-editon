import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import ProductSelf from '../Products/ProductSelf';

const Product = (props) => {
    const [steps, setSteps] = useState(0);
    const handleAddStep = () =>{
        const newStepCount = steps + 1;
        setSteps(newStepCount);
    }
    useEffect(()=>{
        console.log(steps)
    }, [steps])

    const [products, setProducts] = useState(0);
    const addProductHandle = () => {
        const newAddProducts = products + 1;
        setProducts(newAddProducts)
        
    }
    // const [add, setAdd] = useState(0);
  
    
    return (
        <div>
            <div style={{border: '3px solid black'}}>
            <h2>Products</h2>
           <p>My step : {steps}</p>
           <button onClick={handleAddStep}>Step</button>
           <h3>Name :{props.name}</h3>
            </div>
            <div>
                <p>Product ADD : {products}</p>
                <button onClick={addProductHandle}>Add Products</button>
            </div>
         <div style={{border: "2px solid red"}}>
         <ProductSelf price={props.price} steps={steps}
           />
         </div>
        </div>
    );
};


export default Product;