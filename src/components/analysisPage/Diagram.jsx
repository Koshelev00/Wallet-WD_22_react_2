import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
import ChartDataLabels from 'chartjs-plugin-datalabels'
Chart.register(ChartDataLabels)
import { useMemo } from 'react'
import styled from 'styled-components'

const ChartContainer = styled.div`
    width: 100%;
    height: 387px;
    padding: 20px;
    margin-bottom: 0;
    border-radius: 12px;
`

const ChartComponent = ({ expenses = [] }) => { // Добавлено значение по умолчанию
    const barChartData = useMemo(() => {
        const categoryMap = {
            'Еда': 0,
            'Транспорт': 0,
            'Жилье': 0,
            'Развлечения': 0,
            'Образование': 0,
            'Другое': 0
        };
        const REVERSE_CATEGORY_MAPPING = {
            food: 'Еда',
            transport: 'Транспорт',
            housing: 'Жилье',
            joy: 'Развлечения',
            education: 'Образование',
            others: 'Другое'
          };
          

          expenses?.forEach(({ category, sum }) => {
            const russianCategory = REVERSE_CATEGORY_MAPPING[category] || 'Другое';
            categoryMap[russianCategory] += sum;
          });

        return {
            labels: Object.keys(categoryMap),
            datasets: [{
                data: Object.values(categoryMap),
                backgroundColor: [
                    '#D9B6FF',
                    '#FFB53D',
                    '#6EE4FE',
                    '#B0AEFF',
                    '#BCEC30',
                    '#FFB9B8',
                ],
                borderWidth: 0,
                borderRadius: 12,
            }]
        }
    }, [expenses])

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {

            padding: {
            
            top: 30,
            
            bottom: 0,
            
            left: 0,
            
            right: 0,
            
            }
        },
        plugins: {
            legend: { display: false },
            datalabels: {
                color: 'black',
                font: { weight: 600, size: 12 },
                formatter: (value) => value ? `${value} ₽` : '',
                anchor: 'end',
                align: 'top'
            }
        },
        scales: {
            x: { 
                grid: { display: false },
                ticks: { font: { size: 12 } }
            },
            y: { display: false }
        }
    }

    return (
        <ChartContainer>
            <Bar 
                data={barChartData} 
                options={options}
                key={JSON.stringify(barChartData)} // Форсируем обновление
            />
        </ChartContainer>
    )
}

export default ChartComponent