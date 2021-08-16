import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
    return (
      
        <h3
          className="position-absolute top-50 "
          style={{ left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <AiOutlineLoading3Quarters style={{ color: "red" }} />
        </h3>
      
    );
}
