import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const Charts = ({ data }) => {
  const uData = [4, 0, 0];
  const pData = [data.length, data.length, data.length];
  const xLabels = ["Day 1", "Day 2", "Day 3"];
  return (
    <BarChart
      width={700}
      height={400}
      series={[
        { data: pData, label: "Registered", id: "pvId" },
        { data: uData, label: "CheckedIn", id: "uvId" },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
};

export default Charts;
