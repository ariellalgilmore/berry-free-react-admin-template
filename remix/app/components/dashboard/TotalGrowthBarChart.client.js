import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// chart data
import chartData from './chart-data/total-growth-bar-chart';

// types
import PropTypes from 'prop-types';

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalGrowthBarChart = ({ isLoading }) => {
    const customization = useSelector((state) => state.customization);

    const { navType } = customization;
    const primary = '#161616';
    const grey200 = '#e0e0e0';
    const grey500 = '#8d8d8d';

    const primary200 = '#78a9ff';
    const primaryDark = '#0043ce';
    const secondaryMain = '#ff6b35';
    const secondaryLight = '#ffb3a1';

    useEffect(() => {
        const newChartData = {
            ...chartData.options,
            colors: [primary200, primaryDark, secondaryMain, secondaryLight],
            xaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [primary]
                    }
                }
            },
            grid: {
                borderColor: grey200
            },
            tooltip: {
                theme: 'light'
            },
            legend: {
                labels: {
                    colors: grey500
                }
            }
        };

        // do not load chart when loading
        if (!isLoading) {
            ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
        }
    }, [navType, primary200, primaryDark, secondaryMain, secondaryLight, primary, grey200, isLoading, grey500]);

    return (
        <>
            <Chart {...chartData} />
        </>
    );
};

TotalGrowthBarChart.propTypes = {
    isLoading: PropTypes.bool
};

export default TotalGrowthBarChart;
