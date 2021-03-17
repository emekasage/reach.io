import React, { Component, useState, useEffect } from "react";
import "./radial.css";

export default function RadialChart(props) {
    const overall = 380;
    const [innerCircle, setInnerCircle] = useState(0);
    useEffect(()=>{
        var x = (Number(props.value)/100) * Number(overall);
        setInnerCircle(x);
    },[props.value])
    
    return (
        <div style={{ position: "relative", left: "0" }}>
    <svg viewBox="0 0 180 180" width="175" height="85">
      

      <circle
        class="radial-chart-progress"
        stroke="#0DC5FF"
        stroke-width="20"
        stroke-dasharray="380, 502.40000000000003"
        stroke-linecap="round"
        fill="none"
        cx="90"
        cy="90"
        r="80"
      />
       
      <circle
        class="radial-chart-progress"
        stroke="#5A0288"
        stroke-width="20"
        stroke-dasharray={`${innerCircle} , 502.40000000000003`}
        stroke-linecap="round"
        fill="none"
        cx="90"
        cy="90"
        r="80"
      />

      
    </svg>
  </div>

    )
}

