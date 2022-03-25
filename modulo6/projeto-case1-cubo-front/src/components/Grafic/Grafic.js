import React from "react";
import { Doughnut } from "react-chartjs-2";

export function Grafic() {
  const data = {
    labels: ["Red", "Green", "Yellow"],
    weight: 0.5,
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
      }
    ]
  };
  return (
    <div >
      <Doughnut data={data}
              options={{
         // maintainAspectRatio: false,
          legend: {
            position: "right"
          }
        }} />
    </div>
  );
}


