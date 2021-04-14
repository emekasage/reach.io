import React from "react";
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

const data = [
  {
    name: "Mon",
    uv: 41,
    pv: 31,
    amt: 10,
  },
  {
    name: "Tue",
    uv: 31,
    pv: 19,
    amt: 20,
  },
  {
    name: "Wed",
    uv: 49,
    pv: 28,
    amt: 30,
  },
  {
    name: "Thur",
    uv: 44,
    pv: 33,
    amt: 50,
  },
  {
    name: "Fri",
    uv: 37,
    pv: 21,
    amt: 45,
  },
  {
    name: "Sat",
    uv: 45,
    pv: 28,
    amt: 35,
  },
  {
    name: "Sun",
    uv: 34,
    pv: 21,
    amt: 40,
  },
];

export default function StackedBarChart() {
  return (
    <ResponsiveContainer width="100%" height={270}>
      <BarChart
        // width={500}
        // height={270}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 12, fontFamily: "Nunito" }} />
        <YAxis
          domain={[0, 0.5]}
          tick={[0, 0.1, 0.2, 0.3, 0.4, 0.5]}
          tickCount={8}
          tickFormatter={(tick) => `${tick}%`}
        />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="pv"
          stackId="a"
          barSize={15}
          fill="#5A0288"
          radius={[0, 0, 20, 20]}
        />
        <Bar
          dataKey="uv"
          stackId="a"
          barSize={15}
          fill="#0dc5ff"
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
