// carbon
import { Table } from '@carbon/icons-react';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// types
import PropTypes from 'prop-types';

// styles
const CardWrapper = ({ children, ...props }) => (
    <MainCard 
        border={false} 
        content={false}
        sx={{
            backgroundColor: 'var(--cds-layer-accent-01)',
            color: 'var(--cds-text-on-color)',
            overflow: 'hidden',
            position: 'relative',
            '&:after': {
                content: '""',
                position: 'absolute',
                width: '210px',
                height: '210px',
                background: 'linear-gradient(210.04deg, var(--cds-layer-accent-02) -50.94%, rgba(144, 202, 249, 0) 83.49%)',
                top: '-30px',
                right: '-180px'
            },
            '&:before': {
                content: '""',
                position: 'absolute',
                width: '210px',
                height: '210px',
                background: 'linear-gradient(140.9deg, var(--cds-layer-accent-02) -14.02%, rgba(144, 202, 249, 0) 77.58%)',
                top: '-160px',
                right: '-130px'
            }
        }}
        {...props}
    >
        {children}
    </MainCard>
);

// ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //

const TotalIncomeDarkCard = ({ isLoading }) => {
    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <CardWrapper>
                    <div style={{ padding: 'var(--cds-spacing-05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--cds-spacing-05)' }}>
                            <div style={{ 
                                width: '48px', 
                                height: '48px', 
                                backgroundColor: 'var(--cds-layer-accent-02)', 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--cds-text-on-color)'
                            }}>
                                <Table size={24} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h4 style={{ 
                                    fontSize: '1.5rem', 
                                    fontWeight: 500, 
                                    color: 'var(--cds-text-on-color)',
                                    margin: 0,
                                    marginBottom: 'var(--cds-spacing-02)'
                                }}>
                                    $203k
                                </h4>
                                <p style={{ 
                                    fontSize: '0.875rem', 
                                    color: 'var(--cds-text-on-color-disabled)',
                                    margin: 0
                                }}>
                                    Total Income
                                </p>
                            </div>
                        </div>
                    </div>
                </CardWrapper>
            )}
        </>
    );
};

TotalIncomeDarkCard.propTypes = {
    isLoading: PropTypes.bool
};

export default TotalIncomeDarkCard;
