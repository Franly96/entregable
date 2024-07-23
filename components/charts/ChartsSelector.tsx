'use client'
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line, Pie, Scatter } from 'react-chartjs-2';

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

type ChartParamenters = {
  type: 'Line' | 'Pie' | 'Scatter';
  options: any;
  data: any

};

const chartMap = (data: any) => {
  return {
    Line: <Line data={data} />, 
    Pie: <Pie data={data} />, 
    Scatter: <Scatter data={data} /> }
}

export default function Chart(chartParamenters: ChartParamenters) {
  return chartMap(chartParamenters.data)[chartParamenters.type];
}