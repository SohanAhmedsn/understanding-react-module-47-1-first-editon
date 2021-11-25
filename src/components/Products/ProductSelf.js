import React from 'react';

const ProductSelf = (props) => {
    return (
        <div>
            <h4>Price: {props.price}</h4>
            <h3>steps : {props.steps}</h3>
        </div>
    );
};

export default ProductSelf;