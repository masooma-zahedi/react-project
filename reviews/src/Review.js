import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  // console.log(people.length);
  const {name,job,image,text} = people[index];

  const checkIndex = (number)=>{
    if(number > people.length -1){
      return(0)
    }
    if(number < 0 ){
      return(people.length -1 )
    }
    return number;
  }

  const handlePrev = ()=>{
    setIndex((index)=>{
      let newIndex = index-1;
      return checkIndex(newIndex);
    })
  }

  const handleNext = () =>{
    setIndex((index)=>{
      let newIndex = index + 1;
      
      return checkIndex(newIndex)
      
    });
  }

  const handleSurprise = () => {
     let randomIndex =  Math.floor(Math.random()*people.length);
     if(randomIndex === index){
       randomIndex = index+1
     }
     setIndex(checkIndex(randomIndex))
  }

  return (
    <article className=" shadow-lg p-3 d-flex flex-column justify-content-center align-items-center">
      <div
        className="border rounded-circle position-relative bg-primary f"
        style={{ width: 150, height: 150 }}
      >
        <img
          src={image}
          alt={name}
          className="w-100 h-100 rounded-circle position-absolute "
          style={{ right: 6, top: 2 }}
        />
        <span className="position-absolute  " style={{ left: 10, top:10, zIndex: 1 }}>
          <FaQuoteRight
            className="color-white bg-primary p-1 rounded-circle"
            style={{ fontSize: 30, color: "white" }}
          />
        </span>
      </div>
      <div className=" mt-3 h5">{name}</div>
      <div className="h5 text-primary">{job}</div>
      <div className="px-4">{text}</div>
      <div className="">
        <button
          onClick={handlePrev}
          className="border-0  text-primary"
          style={{ backgroundColor: "transparent" }}
        >
          <FaChevronLeft className="border-0" />
        </button>
        <button
          onClick={handleNext}
          className="border-0  text-primary"
          style={{ backgroundColor: "transparent" }}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="mt-2">
        <button
          onClick={handleSurprise}
         className="btn btn-primary">Surprise me</button>
      </div>
    </article>
  );
};

export default Review;
