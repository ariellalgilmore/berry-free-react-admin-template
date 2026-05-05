import { useState } from 'react';

// carbon
import { Dropdown } from '@carbon/react';

// project imports
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import TotalGrowthBarChart from './TotalGrowthBarChart.client';

// types
import PropTypes from 'prop-types';

const status = [
    {
        id: 'today',
        text: 'Today'
    },
    {
        id: 'month',
        text: 'This Month'
    },
    {
        id: 'year',
        text: 'This Year'
    }
];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART CARD ||============================== //

const TotalGrowthBarCard = ({ isLoading }) => {
    const [selectedItem, setSelectedItem] = useState(status[0]);

    return (
        <>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart />
            ) : (
                <MainCard>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cds-spacing-05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cds-spacing-02)' }}>
                                <p className="cds--label">Total Growth</p>
                                <h3 className="cds--heading-03">$2,324.00</h3>
                            </div>
                            <Dropdown
                                id="growth-period-select"
                                titleText=""
                                items={status}
                                selectedItem={selectedItem}
                                onChange={({ selectedItem }) => setSelectedItem(selectedItem)}
                                itemToString={(item) => (item ? item.text : '')}
                            />
                        </div>
                        <div>
                            <TotalGrowthBarChart isLoading={isLoading} />
                        </div>
                    </div>
                </MainCard>
            )}
        </>
    );
};

TotalGrowthBarCard.propTypes = {
    isLoading: PropTypes.bool
};

export default TotalGrowthBarCard;
