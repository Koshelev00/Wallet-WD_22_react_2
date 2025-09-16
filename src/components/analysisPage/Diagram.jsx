import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
import ChartDataLabels from 'chartjs-plugin-datalabels'
Chart.register(ChartDataLabels)
import { useMemo, useState, useEffect } from 'react'
import styled from 'styled-components'

const ChartContainer = styled.div`
    width: 100%;
    height: 387px;
    padding: 20px;
    margin-bottom: 0;
    border-radius: 12px;
    font-family: 'Montserrat', sans-serif;
    @media(max-width:767px){
    padding:0;
    }
`

// eslint-disable-next-line react/prop-types
const ChartComponent = ({ expenses = [] }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

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

        // Сокращаем длинные названия для мобильных устройств
        const shortenLabel = (label) => {
            if (windowWidth < 767) { // Очень маленькие экраны
                if (label === 'Развлечения') return 'Развле...';
                if (label === 'Образование') return 'Образо...';
                if (label === 'Транспорт') return 'Трансп...';
                if (label.length > 6) return label.substring(0, 5) + '.';
            } 
            return label;
        };

        const labels = Object.keys(categoryMap).map(shortenLabel);
        const data = Object.values(categoryMap);

        return {
            labels: labels,
            datasets: [{
                data: data,
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
                categoryPercentage: windowWidth < 768 ? 0.5 : 0.6,
                barPercentage: 0.8,
            }]
        }
    }, [expenses, windowWidth])

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 40,
                bottom: 25,
                left: 15,
                right: 15,
            }
        },
        plugins: {
            legend: { display: false },
            datalabels: {
                color: 'black',
                font: { 
                    weight: 600, 
                    size: windowWidth < 768 ? 9 : 11,
                    family: "'Montserrat', sans-serif" 
                },
                formatter: (value) => value ? `${value.toLocaleString('ru-RU')} ₽` : '',
                anchor: 'end',
                align: 'top',
                offset: 4,
                padding: {
                    bottom: 10
                }
            }
        },
        scales: {
            x: { 
                grid: { 
                    display: false,
                    drawBorder: false
                },
                ticks: { 
                    font: { 
                        size: windowWidth < 768 ? 10 : 12,
                        family: "'Montserrat', sans-serif",
                        weight: 500
                    },
                    maxRotation: 0, 
                    minRotation: 0,
                    padding: 12,
                    color: '#000'
                }
            },
            y: { 
                display: false,
                grid: { display: false },
                beginAtZero: true
            }
        }
    }

    return (
        <ChartContainer>
            <Bar 
                data={barChartData} 
                options={options}
                key={JSON.stringify(barChartData)} 
            />
        </ChartContainer>
    )
}

export default ChartComponent