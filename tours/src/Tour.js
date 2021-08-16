import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,removeTour}) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article key={id} className="border mb-3 shadow-lg rounded">
      <dic className="card" >
        <div className="" style={{height:400}}>
          <img src={image} alt={name} className="card-img-top w-100 h-100" />
        </div>
        <div className="card-body p-4">
          <div className="card-title d-flex justify-content-between py-2">
            <h5>{name}</h5>
            <div className="text-primary h5 p-1 rounded" style={{backgroundColor:"#d2f1fa"}}> $ {price}</div>
            </div>
          <div className="card-text">
            {readMore ? info : `${info.substring(0,200)}...`}
            <button
              className=" btn-sm text-primary border-0"
              style={{backgroundColor:'transparent'}}
              onClick={()=>setReadMore(!readMore)}
            >
              {readMore ? "Show Less" : "Read More"}
            </button>
            <div className="text-center">
            <button
              onClick={()=>removeTour(id)}
             className="btn btn-outline-danger">Not Intersted</button>
            </div>
          </div>
        </div>
      </dic>
    </article>
  )
};

export default Tour;
