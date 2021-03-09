import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';
export const CategoryContext = createContext();

function App() {
  const [category,setCategory] = useState('device')
  return (
    <CategoryContext.Provider value={[category,setCategory]}>
      <p>increasing :{category}</p>
      <Header></Header>
      <Home></Home>
      <Shipment/>
    </CategoryContext.Provider>
  );
}

export default App;
