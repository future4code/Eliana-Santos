import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";


export function Grafic(props) {
  const [data, setData] = useState({})

  useEffect(() => {
    setData({
      labels: props.users?.map(user => `${user.firstName} ${user.lastName}`),
      weight: 0.5,
      datasets: [
        {
          data: props.users?.map(user => (user.participation)),
          backgroundColor: props.users?.map(() => `${'#' + (Math.random().toString(16) + '00000').slice(2, 8)}`),
          hoverBackgroundColor: props.users?.map(() => `${'#' + (Math.random().toString(16) + '00000').slice(2, 8)}`)
        }
      ]
    })
  }, [props])

  return (
    <div >
      {data &&
        <Doughnut data={data}
          options={{
            // maintainAspectRatio: false,
            legend: {
              position: "right"
            }
          }} />
      }
    </div>
  );
}


