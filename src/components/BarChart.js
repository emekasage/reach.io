/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
/* eslint-disable */

import React, { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function App(props) {
  const [data, setData] = useState([
    {
      name: "SUN",
      uv: 0,
      pv: 0,
      amt: 0,
    },
    {
      name: "MON",
      uv: 0,
      pv: 0,
      amt: 0,
    },
    {
      name: "TUE",
      uv: 0,
      pv: 0,
      amt: 0,
    },
    {
      name: "WED",
      uv: 0,
      pv: 0,
      amt: 0,
    },
    {
      name: "THUR",
      uv: 0,
      pv: 0,
      amt: 0,
    },
    {
      name: "FRI",
      uv: 0,
      pv: 0,
      amt: 0,
    },
    {
      name: "SAT",
      uv: 0,
      pv: 0,
      amt: 0,
    },
  ]);
  useEffect(() => {
    if(typeof(props.showThisWeek) !== "undefined"){
      if(props.showThisWeek){
        setData(props.thisWeekData);
      }else{
        setData(props.lastWeekData)
      }
    }
    
  }, [props.showThisWeek, props.lastWeekData, props.thisWeekData]);
  return (
    <div>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        // width={500}
        // height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, "dataMax + 150"]} allowDataOverflow={true} />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" barSize={30} fill="#5A0288" radius={[3, 3, 0, 0]} />
        <Bar dataKey="uv" barSize={30} fill="#0dc5ff" radius={[3, 3, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
}
