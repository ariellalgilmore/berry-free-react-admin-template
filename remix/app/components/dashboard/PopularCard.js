import { useState } from 'react';

// carbon
import { Button, OverflowMenu, OverflowMenuItem } from '@carbon/react';
import { ChevronRight, CaretUp, CaretDown } from '@carbon/icons-react';

// project imports
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import BajajAreaChartCard from './BajajAreaChartCard.client';

// types
import PropTypes from 'prop-types';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ isLoading }) => {
    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <div style={{ padding: 'var(--cds-spacing-05)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--cds-spacing-05)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <h4 className="cds--heading-04">Popular Stocks</h4>
                                <OverflowMenu 
                                    aria-label="popular card actions"
                                    iconDescription="More actions"
                                >
                                    <OverflowMenuItem itemText="Today" />
                                    <OverflowMenuItem itemText="This Month" />
                                    <OverflowMenuItem itemText="This Year" />
                                </OverflowMenu>
                            </div>
                            <div style={{ paddingTop: 'var(--cds-spacing-05)' }}>
                                <BajajAreaChartCard />
                            </div>
                            <div>
                                {[
                                    { name: 'Bajaj Finery', price: '$1839.00', profit: true, change: '10% Profit' },
                                    { name: 'TTML', price: '$100.00', profit: false, change: '10% loss' },
                                    { name: 'Reliance', price: '$200.00', profit: true, change: '10% Profit' },
                                    { name: 'TTML', price: '$189.00', profit: false, change: '10% loss' },
                                    { name: 'Stolon', price: '$189.00', profit: false, change: '10% loss' }
                                ].map((stock, index) => (
                                    <div key={index}>
                                        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 'var(--cds-spacing-03)' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <p className="cds--label">{stock.name}</p>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--cds-spacing-03)' }}>
                                                    <p className="cds--label">{stock.price}</p>
                                                    <div style={{ 
                                                        width: '16px', 
                                                        height: '16px', 
                                                        backgroundColor: stock.profit ? 'var(--cds-support-success)' : 'var(--cds-support-warning)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}>
                                                        {stock.profit ? <CaretUp size={12} /> : <CaretDown size={12} />}
                                                    </div>
                                                </div>
                                            </div>
                                            <p style={{ 
                                                fontSize: '0.875rem', 
                                                color: stock.profit ? 'var(--cds-support-success)' : 'var(--cds-support-warning)',
                                                margin: 0
                                            }}>
                                                {stock.change}
                                            </p>
                                        </div>
                                        {index < 4 && <hr style={{ border: 'none', borderTop: '1px solid var(--cds-border-subtle-01)', margin: 'var(--cds-spacing-04) 0' }} />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: 'var(--cds-spacing-03)', paddingTop: 0, display: 'flex', justifyContent: 'center' }}>
                        <Button kind="ghost" size="sm" renderIcon={ChevronRight}>
                            View All
                        </Button>
                    </div>
                </MainCard>
            )}
        </>
    );
};

PopularCard.propTypes = {
    isLoading: PropTypes.bool
};

export default PopularCard;
