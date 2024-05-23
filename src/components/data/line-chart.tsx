
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};



type LineChartProps = {
    title: string;
    labels: string[];
    data: number[];
}

function LineChart({ title, labels, data } : LineChartProps) {
    const config = {
        labels,
        datasets: [
          {
            label: title,
            data: data,
            borderColor: '#7743DB',
            backgroundColor: '#895CE0',
            lineTension: .3,
          }
        ],
      };

    return (
        <Line options={options} data={config} />
    );
}


export default LineChart;