// carbon
import { Button, Tile } from '@carbon/react';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// ==============================|| PROFILE MENU - UPGRADE PLAN CARD ||============================== //

const UpgradePlanCard = () => (
    <Tile
        style={{
            backgroundColor: '#fff1e6',
            marginTop: '16px',
            marginBottom: '16px',
            overflow: 'hidden',
            position: 'relative',
            padding: '16px'
        }}
    >
        <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            border: '19px solid #ff832b',
            borderRadius: '50%',
            top: '65px',
            right: '-150px'
        }} />
        <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            border: '3px solid #ff832b',
            borderRadius: '50%',
            top: '145px',
            right: '-70px'
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ marginBottom: '16px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>Upgrade your plan</h4>
            </div>
            <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '14px', color: '#525252', opacity: 0.6, margin: 0 }}>
                    70% discount for 1 years <br />
                    subscriptions.
                </p>
            </div>
            <div>
                <AnimateButton>
                    <Button kind="tertiary" size="sm" style={{ backgroundColor: '#ff832b', color: 'white' }}>
                        Go Premium
                    </Button>
                </AnimateButton>
            </div>
        </div>
    </Tile>
);

export default UpgradePlanCard;