import React, { useState } from 'react'

export default function Home() {
  const [showBox, setShowBox] = useState(true)
  function handleBox(){
    setShowBox(false)
  }
    return (
      <>
      {
        showBox &&
      <div onClick={handleBox} className="p-3 bg-secondary w-25 rounded m-1 text-light position-absolute " style={{cursor:"pointer"}}>
        <p>user : masooma.zahedi1@gmail.com</p>
        <p>pass : password </p>
      </div>
      }
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <h1>welcome Home</h1>
      </div>
      </>
    );
}
