import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(1);

  useEffect(()=>{
    const lastIndex = people.length - 1;
    if(index < 0 ){
      setIndex(lastIndex)
    }
    if(index > lastIndex){
      setIndex(0)
    }
  },[index,people])

  useEffect(()=>{
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
      return () => {
        clearInterval(slider);
      };
  },[index])

  return (
    <>
      <section className=" container">
        <h2 className="text-center mt-5">
          <span className="text-danger">/</span> Review
        </h2>
        <div className="bg-success border border-danger mt-5 position-relative ">
          <div
            className=" shadow-lg position-absolute d-flex flex-row w-50 flex-wrap"
            style={{
              height:470,
              overflow:"hidden",
              left: "50%",
              top: 50,
              transform: "translateX(-50%)",
            }}
          >
            {people.map((person, indexPerson) => {
              const { id, image, name, title, quote } = person;

              let position = "nextSlide";
              if(indexPerson === index){
                position= "activeSlide"
              }
              if(indexPerson === index-1 || (index === 0 && indexPerson === people.length-1)){
                position = "lastSlide"
              }
              return (
                <article className={`${position}   text-center p-5  bg-light shadow review w-100 h-100 position-absolute`}>
                  <div
                    className="bg-secondary p-1 rounded-circle mb-3  mx-auto"
                    style={{
                      top:0,
                      left:0,
                      width: 150,
                      height: 150,
                      boxShadow: "0px 0px 20px #aEbE9E",
                    }}
                  >
                    <img
                      src={image}
                      alt={name}
                      className="w-100 h-100 rounded-circle"
                    />
                  </div>
                  <h4 style={{ color: "#a83611" }}>{name}</h4>
                  <h4>{title}</h4>
                  <p className="h6">{quote}</p>
                  <FaQuoteRight
                    style={{ fontSize: 40, marginTop: 50, color: "#a83611" }}
                  />
                </article>
              );
            })}
                  <div
                    onClick={()=>{setIndex(index-1)}}
                    className="position-absolute "
                    style={{ top: "50%", left: 20 }}
                  >
                    <FiChevronLeft style={{ fontSize: 30 }} />
                  </div>
                  <div
                    onClick={()=>setIndex(index+1)}
                    className="position-absolute"
                    style={{ top: "50%", right: 20 }}
                  >
                    <FiChevronRight style={{ fontSize: 30 }} />
                  </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default App;
