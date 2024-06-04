import { Bar } from "react-chartjs-2"

const BarChart = () => {
  return (
    <Bar data={{labels:["A", "B", "C", "D", "E", "F"],
      datasets: [{
        label: 'Revenue',
        data: [12, 19, 3, 5, 2, 3],
      }],
    }}/>
  )
}

export default BarChart
