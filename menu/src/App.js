import React, { useState } from 'react';
import Menu from './Menu';
// import  Modal  from './Modal';
import Categories from './Categories';
import items from './data';
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { motion } from 'framer-motion';
import "./App.css"

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories)
  const [showModal, setShowModal] = useState(false)

  const filterItems = (category) => {
    if(category === "all"){
      setMenuItems(items)
      return;
    } 
    const newItems = items.filter(item =>
        item.category === category); 
    setMenuItems(newItems)
  }
  return (
    <>
      <main className=" bg-light w-75 p-3 mx-auto mt-5 rounded">
        <motion.h2
          initial={{ color: "#000" }}
          animate={{ color: "#c59d5f" }}
          transition={{ yoyo: Infinity, duration: 0.8 }}
          className="text-center p-3 undertext mb-4"
        >
          Our Menu
        </motion.h2>
        <Categories
          categories={categories}
          filterItems={filterItems}
          items={menuItems}
        />
        <div className="d-flex flex-row flex-wrap">
          <Menu
            items={menuItems}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
      </main>
    </>
  );
}

export default App;
