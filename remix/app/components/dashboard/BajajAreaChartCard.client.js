import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// carbon
import { Tile } from '@carbon/react';

// project imports
import chartData from './chart-data/bajaj-area-chart';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

const BajajAreaChartCard = () => {
    const customization = useSelector((state) => state.customization);
    const { navType } = customization;

    const orangeDark = '#ff6b35';

    useEffect(() => {
        const newSupportChart = {
            ...chartData.options,
            colors: [orangeDark],
            tooltip: {
                theme: 'light'
            }
        };
        ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart);
    }, [navType, orangeDark]);

    return (
        <Tile style={{ backgroundColor: 'var(--cds-layer-02)' }}>
            <div style={{ padding: 'var(--cds-spacing-05)', paddingBottom: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--cds-spacing-03)' }}>
                    <p className="cds--label" style={{ color: 'var(--cds-text-primary)' }}>
                        Bajaj Finery
                    </p>
                    <h4 className="cds--heading-04" style={{ color: 'var(--cds-text-primary)' }}>
                        $1839.00
                    </h4>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--cds-text-secondary)', margin: 0 }}>
                    10% Profit
                </p>
            </div>
            <Chart {...chartData} />
        </Tile>
    );
};

export default BajajAreaChartCard;
