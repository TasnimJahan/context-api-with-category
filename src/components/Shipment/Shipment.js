import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category,setCategory]= useContext(CategoryContext);
    return (
        <div>
            <h2>It is shipment</h2>
            <button onClick={()=>{setCategory(category+1)}}>Increment form category</button>
            <br/><br/>
            <button onClick={()=>{setCategory(category-1)}}>Decrement form category</button>
        </div>
    );
};

export default Shipment;