import { useState } from 'react';

// carbon
import { OverflowMenu, OverflowMenuItem } from '@carbon/react';
import { ArrowUpRight, Download, Copy, DocumentPdf, Archive } from '@carbon/icons-react';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// types
import PropTypes from 'prop-types';

// assets
import EarningIcon from 'assets/images/icons/earning.svg';

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
                background: 'var(--cds-layer-accent-02)',
                top: '-85px',
                right: '-95px'
            },
            '&:before': {
                content: '""',
                position: 'absolute',
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

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const EarningCard = ({ isLoading }) => {
    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard />
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
                                    <img src={EarningIcon} alt="Notification" />
                                </div>
                                <OverflowMenu 
                                    aria-label="earning card actions"
                                    iconDescription="More actions"
                                    style={{ zIndex: 1 }}
                                >
                                    <OverflowMenuItem itemText="Import Card" />
                                    <OverflowMenuItem itemText="Copy Data" />
                                    <OverflowMenuItem itemText="Export" />
                                    <OverflowMenuItem itemText="Archive File" />
                                </OverflowMenu>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: 'var(--cds-spacing-05)', marginBottom: 'var(--cds-spacing-03)' }}>
                                <h2 style={{ fontSize: '2.125rem', fontWeight: 500, marginRight: 'var(--cds-spacing-03)', margin: 0 }}>
                                    $500.00
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
                                    <ArrowUpRight size={16} />
                                </div>
                            </div>
                            <div style={{ marginBottom: 'var(--cds-spacing-03)' }}>
                                <p style={{ 
                                    fontSize: '1rem', 
                                    fontWeight: 500, 
                                    color: 'var(--cds-text-on-color-disabled)',
                                    margin: 0
                                }}>
                                    Total Earning
                                </p>
                            </div>
                        </div>
                    </div>
                </CardWrapper>
            )}
        </>
    );
};

EarningCard.propTypes = {
    isLoading: PropTypes.bool
};

export default EarningCard;
