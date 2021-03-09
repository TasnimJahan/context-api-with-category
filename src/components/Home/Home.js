import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    // console.log(props);
    const counting = useContext(CategoryContext);
    return (
        <div style={{border: '1px solid purple'}}>
            <h1>It is home: {counting}</h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;