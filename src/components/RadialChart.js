import React, { useState, useEffect } from "react";
import "./radial.css";

export default function RadialChart(props) {
  const overall = 380;
  const [innerCircle, setInnerCircle] = useState(0);
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    var x = (Number(props.value) / 100) * Number(overall);
    setInnerCircle(x);
    // eslint-disable-next-line react/prop-types
  }, [props.value]);

  return (
    <div style={{ position: "relative", left: "0" }}>
      <svg viewBox="0 0 180 180" width="175" height="85">
        <circle
          className="radial-chart-progress"
          stroke="#0DC5FF"
          strokeWidth="20"
          strokeDasharray="380, 502.40000000000003"
          strokeLinecap="round"
          fill="none"
          cx="90"
          cy="90"
          r="80"
        />

        <circle
          className="radial-chart-progress"
          stroke="#5A0288"
          strokeWidth="20"
          strokeDasharray={`${innerCircle} , 502.40000000000003`}
          strokeLinecap="round"
          fill="none"
          cx="90"
          cy="90"
          r="80"
        />
      </svg>
    </div>
  );
}
