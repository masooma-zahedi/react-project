import React, { useEffect, useState } from "react";
import data from "./data";
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [placeHolder, setPlaceHolder] = useState(0)

  const handleSubmit = (e)=>{
    e.preventDefault();
    let amount = parseInt(count); 
    console.log(typeof(amount));
    if(count <= 0){
      alert("Number must be bigger than 0 ")
      amount = null;
      setCount("");
      setPlaceHolder(0)
    }
    if(count > 8 ){
      alert( "Maximum Number is 8 ")
      amount= 8;
      setCount("")
      setPlaceHolder(8)
    }
    setText(data.slice(0, amount));
  }
  return (
    
      <section className="container">
        <h4 className="p-3 bg-warning text-center text-success">
          how many paragraph do you want to try?
        </h4>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group text-center py-4 bg-light">
            <label htmlFor="para" className="form-group-lable ">
              Paragraph: 
            </label>
            <input type="number" className="form-group-input  mx-2" value={count} placeholder={placeHolder}  onChange={(e)=>setCount(e.target.value)} />
            <button className="btn btn-primary btn-sm">Generate</button>
          </div>
        </form>
      <article>
        {
          text.map(item => {
            return <>
            <p className="text-center mt-2 px-4

            ">{item}</p>
            </>
          })
        }
      </article>
      </section>
    
  );
}

export default App;
