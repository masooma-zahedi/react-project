import React from 'react';
import Review from './Review';
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
  <main className=" mx-auto text-center " style={{marginTop:140, width:500}}>
    <h4 className="mb-5" style={{color: "#2356f9"}}> Our Reviews </h4>
    {/* <div> */}
      <Review />
    {/* </div> */}
  </main>
  )
}

export default App;
