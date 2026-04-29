// carbon
import { Tile, ProgressBar } from '@carbon/react';
import { Table } from '@carbon/icons-react';

// types
import PropTypes from 'prop-types';

// ==============================|| PROGRESS BAR WITH LABEL ||============================== //

function LinearProgressWithLabel({ value, ...others }) {
    return (
        <div style={{ marginTop: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#0f62fe' }}>
                    Progress
                </span>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>{`${Math.round(value)}%`}</span>
            </div>
            <ProgressBar
                value={value}
                max={100}
                size="sm"
                {...others}
            />
        </div>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number
};

// ==============================|| SIDEBAR MENU Card ||============================== //

const MenuCard = () => {
    return (
        <Tile
            style={{
                backgroundColor: '#e5f6ff',
                marginBottom: '22px',
                position: 'relative',
                overflow: 'hidden',
                padding: '16px'
            }}
        >
            <div style={{
                position: 'absolute',
                width: '157px',
                height: '157px',
                backgroundColor: '#bae6ff',
                borderRadius: '50%',
                top: '-105px',
                right: '-96px'
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div
                        style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '8px',
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '12px',
                            flexShrink: 0
                        }}
                    >
                        <Table size={24} style={{ color: '#0f62fe' }} />
                    </div>
                    <div>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f62fe', marginBottom: '4px' }}>
                            Get Extra Space
                        </div>
                        <div style={{ fontSize: '12px', color: '#525252' }}>
                            28/23 GB
                        </div>
                    </div>
                </div>
                <LinearProgressWithLabel value={80} />
            </div>
        </Tile>
    );
};

export default MenuCard;