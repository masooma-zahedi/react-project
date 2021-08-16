import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Menu = ({items, showModal, setShowModal}) => {
  return(
    items.map((item,index )=>{
        const { id, img, category, title, desc, price } = item;
        
        return (
          <article
            onClick={()=>{
              return(
                setShowModal(true)
              )
            }
              }
            className=" p-2 d-flex flex-wrap" style={{ width: "50%" }}>
            <motion.div
              whileHover={{x:[-10,0,-10,0,-10,0]}}
              className=" mb-3 rounded"
              style={{
                height: 150,
                width: "35%",
                border: "3px solid #c59d5f",
              }}
            >
              <img
                src={img}
                alt={title}
                className=""
                style={{ width: "100%", height: "100%" }}
              />
            </motion.div>
            <div className=" " style={{ width: "65%" }}>
              <div className="d-flex justify-content-between mx-2 border-bottom border-3 pb-0  ">
                <h6>{title}</h6>
                <motion.h6
                  whileHover={{scale:1.3}}
                 style={{ color: "#c59d5f", }}>${price}</motion.h6>
              </div>
              <div className="p-2 ">{desc}</div>
            </div>
          </article>
        );
    })
  )
};

export default Menu;
