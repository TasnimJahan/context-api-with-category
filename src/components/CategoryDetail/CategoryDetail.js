import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = () => {
    const count = useContext(CategoryContext)
    return (
        <div>
            {/* <h4>This is category details:{count}</h4> */}
            <h4>Count by Api context :{count}</h4>
        </div>
    );
};

export default CategoryDetail;