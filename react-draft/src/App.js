import { useState, useEffect } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Label,
} from "recharts";

import data from "./mock-sessions.json";

import "./App.css";

const labelsMap = new Map();

labelsMap["kilogram"] = "Poids (kg)";
labelsMap["calories"] = "Calories brûlées (kCal)";

const renderColorfulLegendText = (value) => {
  return (
    <span
      style={{
        color: "#74798C",
        fontWeight: 500,
        fontSize: 14,
        marginRight: 32,
        fontFamily: "Roboto",
      }}
    >
      {value}
    </span>
  );
};

function App() {
  const [sessions, setSessions] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setSessions(
      data.map((o, i) => {
        return { ...o, day: (i + 1).toString() };
      })
    );
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <BarChart width={835} height={320} data={sessions}>
        <Legend
          align="right"
          verticalAlign="top"
          wrapperStyle={{ top: -47 }}
          iconSize={8}
          formatter={renderColorfulLegendText}
        />

        <CartesianGrid strokeDasharray="1" vertical={false} />
        <XAxis dataKey="day" axisLine={true} tickLine={false} />
        <YAxis
          // dataKey="kilogram"
          orientation="right"
          // type="number"
          // domain={["dataMin - 1", "dataMax + 1"]}
          axisLine={false}
          tickLine={false}
          // scale="linear"
          // tickCount={3}
          // interval={1}
        />
        <Tooltip />
        <Bar
          dataKey="kilogram"
          name="Poids (kg)"
          fill="#282D30"
          barSize={7}
          radius={[7, 7, 0, 0]}
          legendType="circle"
        />
        <Bar
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          barSize={7}
          radius={[7, 7, 0, 0]}
          legendType="circle"
        />
      </BarChart>
    </div>
  );
}

export default App;
