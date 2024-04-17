'use client';

import "./Form.css";
import { useState } from "react";

const FormInput = () => {
  const [showCross, setShowCross] = useState(false);
  const [text, setText] = useState('');
  return (
    <div className="form_cont">
      <input
      value={text}
      onChange={(t)=>setText(t.target.value)}
        className="form_input"
        type="tel"
        placeholder="Enter Phone Number"
        onFocus={()=>setShowCross(true)}
        onBlur={()=>setShowCross(false)}
      ></input>
      {showCross && text!=='' && (
        <svg
        onClick={()=>setText('')}
          width="14"
          height="15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.498.498.356 1.72l5.41 5.786L.41 13.233l1.17 1.25 5.355-5.728 5.41 5.786 1.142-1.22-5.41-5.787 5.492-5.873-1.17-1.25-5.491 5.873L1.498.498Z"
            fill="#fff"
          ></path>
        </svg>
      )}
      <div className="form_btn" style={{cursor:text?'pointer':'not-allowed'}}>Apply Now</div>
    </div>
  );
};
export default FormInput;
