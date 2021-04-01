import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "SUN",
    uv: 300,
    pv: 450,
    amt: 2400
  },
  {
    name: "MON",
    uv: 300,
    pv: 450,
    amt: 2210
  },
  {
    name: "TUE",
    uv: 300,
    pv: 450,
    amt: 2290
  },
  {
    name: "WED",
    uv: 300,
    pv: 450,
    amt: 2000
  },
  {
    name: "THUR",
    uv: 300,
    pv: 450,
    amt: 2181
  },
  {
    name: "FRI",
    uv: 300,
    pv: 450,
    amt: 2500
  },
  {
    name: "SAT",
    uv: 300,
    pv: 450,
    amt: 2100
  }
];

export default function App() {
  return (
    <ResponsiveContainer width="100%" height={300}>
        <BarChart
        // width={500}
        // height={300}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 'dataMax + 150']} allowDataOverflow={true}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" barSize={30} fill="#5A0288" radius={[3, 3, 0, 0]}/>
        <Bar dataKey="uv" barSize={30} fill="#F5F5F5" radius={[3, 3, 0, 0]}/>
        </BarChart>

    </ResponsiveContainer>
  );
}
