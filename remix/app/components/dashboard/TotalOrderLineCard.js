import { useState } from 'react';

// carbon
import { Button, ButtonSet } from '@carbon/react';
import { ShoppingBag, ArrowDownRight } from '@carbon/icons-react';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard.client';

// types
import PropTypes from 'prop-types';

const CardWrapper = ({ children, ...props }) => (
    <MainCard 
        border={false} 
        content={false}
        sx={{
            backgroundColor: 'var(--cds-layer-accent-01)',
            color: 'var(--cds-text-on-color)',
            overflow: 'hidden',
            position: 'relative',
            '& > div': {
                position: 'relative',
                zIndex: 5
            },
            '&:after': {
                content: '""',
                position: 'absolute',
                width: '210px',
                height: '210px',
                background: 'var(--cds-layer-accent-02)',
                zIndex: 1,
                top: '-85px',
                right: '-95px'
            },
            '&:before': {
                content: '""',
                position: 'absolute',
                zIndex: 1,
                width: '210px',
                height: '210px',
                background: 'var(--cds-layer-accent-02)',
                top: '-125px',
                right: '-15px',
                opacity: 0.5
            }
        }}
        {...props}
    >
        {children}
    </MainCard>
);

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const TotalOrderLineCard = ({ isLoading }) => {
    const [timeValue, setTimeValue] = useState(false);

    return (
        <>
            {isLoading ? (
                <SkeletonTotalOrderCard />
            ) : (
                <CardWrapper>
                    <div style={{ padding: 'var(--cds-spacing-05)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--cds-spacing-05)' }}>
                                <div style={{ 
                                    width: '48px', 
                                    height: '48px', 
                                    backgroundColor: 'var(--cds-layer-accent-02)', 
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 'var(--cds-spacing-03)'
                                }}>
                                    <ShoppingBag size={24} />
                                </div>
                                <ButtonSet>
                                    <Button 
                                        kind={timeValue ? 'primary' : 'ghost'}
                                        size="sm"
                                        onClick={() => setTimeValue(true)}
                                    >
                                        Month
                                    </Button>
                                    <Button 
                                        kind={!timeValue ? 'primary' : 'ghost'}
                                        size="sm"
                                        onClick={() => setTimeValue(false)}
                                    >
                                        Year
                                    </Button>
                                </ButtonSet>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--cds-spacing-03)' }}>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 'var(--cds-spacing-05)', marginBottom: 'var(--cds-spacing-03)' }}>
                                        <h2 style={{ fontSize: '2.125rem', fontWeight: 500, marginRight: 'var(--cds-spacing-03)', margin: 0 }}>
                                            {timeValue ? '$108' : '$961'}
                                        </h2>
                                        <div style={{ 
                                            width: '24px', 
                                            height: '24px', 
                                            backgroundColor: 'var(--cds-layer-accent-02)', 
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer'
                                        }}>
                                            <ArrowDownRight size={16} />
                                        </div>
                                    </div>
                                    <p style={{ 
                                        fontSize: '1rem', 
                                        fontWeight: 500, 
                                        color: 'var(--cds-text-on-color-disabled)',
                                        margin: 0
                                    }}>
                                        Total Order
                                    </p>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <TotalOrderLineChartCard timeValue={timeValue} />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardWrapper>
            )}
        </>
    );
};

TotalOrderLineCard.propTypes = {
    isLoading: PropTypes.bool
};

export default TotalOrderLineCard;
