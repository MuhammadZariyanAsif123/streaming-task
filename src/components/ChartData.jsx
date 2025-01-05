import React, { useEffect, useState, useContext } from "react";
import countriesGDP from "../countries_gdp.json";
import { StreamContext } from "./StreamingTask";
import Chart from "react-apexcharts";

// Function to shuffle an array randomly
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

const LineChart = ({ data }) => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        type: "line",
      },
      xaxis: {
        categories: "Countries",
      },
      animate: true,
    },
    series: [
      {
        name: "GDP",
        data: [],
      },
    ],
  });

  useEffect(() => {
    // Update chart data based on passed data
    setChartData({
      options: {
        colors: ["#9f17a3", "#a35b17"],
        chart: {
          type: "bar",
        },
        xaxis: {
          categories: data.map((item) => item.name), // Extract countries' names for x-axis
        },
      },
      series: [
        {
          name: "GDP",
          data: data.map((item) => item.gdp), // Extract GDP values for y-axis
        },
      ],
    });
  }, [data]);

  return (
    <Chart
      height={400}
      width="100%"
      options={chartData.options}
      series={chartData.series}
      type="area"
    />
  );
};

const ChartData = () => {
  const streamValue = useContext(StreamContext);
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    if (streamValue) {
      // Shuffle data every second when streaming is enabled
      const interval = setInterval(() => {
        setShuffledData(shuffleArray([...countriesGDP]));
      }, 1000);

      // Initial shuffle
      setShuffledData(shuffleArray([...countriesGDP]));

      // Cleanup interval on unmount or when streamValue changes
      return () => clearInterval(interval);
    } else {
      // Set data once when streaming is disabled
      setShuffledData(shuffleArray([...countriesGDP]));
    }
  }, [streamValue]);

  return (
    <div>
      <LineChart data={shuffledData} />
    </div>
  );
};

export default ChartData;
