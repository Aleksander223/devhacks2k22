import React from "react";
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
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
);

const options = {
    responsive: true,
    plugins: {
    },
    scales: {
        xAxes: [{
            gridLines: {
                display:false
            }
        }],
        yAxes: [{
            gridLines: {
                display:false
            }   
        }]
    },
    maintainAspectRatio: false,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            data: labels.map(() => faker.datatype.number({ min: 0, max: 200 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
};

export default function ChartCard() {
    return (
        <>
            <div className="card bg-base-100 shadow-md border-base-200 border-2 w-full">
                <div className="card-body">
                    <h2 className="card-title mx-auto text-primary">Community points</h2>
                    <div className="divider"></div>
                    <div className="p-4 w-full">
                        <Line options={options} data={data} />
                    </div>
                </div>
            </div>
        </>
    );
}