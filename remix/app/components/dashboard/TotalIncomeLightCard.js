// carbon
import { Storefront } from '@carbon/icons-react';

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
            overflow: 'hidden',
            position: 'relative',
            '&:after': {
                content: '""',
                position: 'absolute',
                width: '210px',
                height: '210px',
                background: 'linear-gradient(210.04deg, var(--cds-support-warning) -50.94%, rgba(144, 202, 249, 0) 83.49%)',
                top: '-30px',
                right: '-180px'
            },
            '&:before': {
                content: '""',
                position: 'absolute',
                width: '210px',
                height: '210px',
                background: 'linear-gradient(140.9deg, var(--cds-support-warning) -14.02%, rgba(144, 202, 249, 0) 70.50%)',
                top: '-160px',
                right: '-130px'
            }
        }}
        {...props}
    >
        {children}
    </MainCard>
);

// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //

const TotalIncomeLightCard = ({ isLoading }) => {
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
                                backgroundColor: 'var(--cds-support-warning-inverse)', 
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--cds-support-warning)'
                            }}>
                                <Storefront size={24} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h4 style={{ 
                                    fontSize: '1.5rem', 
                                    fontWeight: 500, 
                                    margin: 0,
                                    marginBottom: 'var(--cds-spacing-02)'
                                }}>
                                    $203k
                                </h4>
                                <p style={{ 
                                    fontSize: '0.875rem', 
                                    color: 'var(--cds-text-secondary)',
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

TotalIncomeLightCard.propTypes = {
    isLoading: PropTypes.bool
};

export default TotalIncomeLightCard;
