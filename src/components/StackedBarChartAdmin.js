import React, { useEffect, useState, useContext } from "react";
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
import { providerFunctions } from "../provider/FunctionsProvider";

export default function StackedBarChartAdmin() {
  const { metricsGraph } = useContext(providerFunctions);
  const [datatouse, setDatatouse] = useState([]);

  useEffect(() => {
    var cc = { ...metricsGraph };
    // console.log(cc);
    var dt = [];
    dt.push({ name: "Mon", value: cc.data.mon });
    dt.push({ name: "Tue", value: cc.data.tue });
    dt.push({ name: "Wed", value: cc.data.wed });
    dt.push({ name: "Thurs", value: cc.data.thur });
    dt.push({ name: "Fri", value: cc.data.fri });
    dt.push({ name: "Sat", value: cc.data.sat });
    dt.push({ name: "Sun", value: cc.data.sun });
    setDatatouse(dt);
    // console.log(dt);
  }, [metricsGraph]);
  return (
    <ResponsiveContainer width="100%" height={270}>
      <BarChart
        // width={500}
        // height={270}
        data={datatouse}
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
          domain={[100, 5000]}
          tick={[0, 0.1, 0.2, 0.3, 0.4, 0.5]}
          tickCount={21}
          tickFormatter={(tick) => `${tick}`}
        />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="value"
          stackId="a"
          barSize={15}
          fill="#5A0288"
          radius={[20, 20, 20, 20]}
        />
        {/* <Bar
          dataKey="uv"
          stackId="a"
          barSize={15}
          fill="#0dc5ff"
          radius={[20, 20, 0, 0]}
        /> */}
      </BarChart>
    </ResponsiveContainer>
  );
}
