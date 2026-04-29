import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// carbon
import { Button, Slider, RadioButtonGroup, RadioButton, Layer } from '@carbon/react';
import { Settings } from '@carbon/icons-react';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import { gridSpacing } from 'store/constant';
import { SET_BORDER_RADIUS, SET_FONT_FAMILY } from 'store/actions';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';

// concat 'px'
function valueText(value) {
    return `${value}px`;
}

// ==============================|| LIVE CUSTOMIZATION ||============================== //

const Customization = () => {
    const dispatch = useDispatch();
    const customization = useSelector((state) => state.customization);

    // drawer on/off
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
    };

    // state - border radius
    const [borderRadius, setBorderRadius] = useState(customization.borderRadius);
    const handleBorderRadius = (event) => {
        setBorderRadius(event.value);
    };

    useEffect(() => {
        dispatch({ type: SET_BORDER_RADIUS, borderRadius });
    }, [dispatch, borderRadius]);

    let initialFont;
    switch (customization.fontFamily) {
        case `'Inter', sans-serif`:
            initialFont = 'Inter';
            break;
        case `'Poppins', sans-serif`:
            initialFont = 'Poppins';
            break;
        case `'Roboto', sans-serif`:
        default:
            initialFont = 'Roboto';
            break;
    }

    // state - font family
    const [fontFamily, setFontFamily] = useState(initialFont);
    useEffect(() => {
        let newFont;
        switch (fontFamily) {
            case 'Inter':
                newFont = `'Inter', sans-serif`;
                break;
            case 'Poppins':
                newFont = `'Poppins', sans-serif`;
                break;
            case 'Roboto':
            default:
                newFont = `'Roboto', sans-serif`;
                break;
        }
        dispatch({ type: SET_FONT_FAMILY, fontFamily: newFont });
    }, [dispatch, fontFamily]);

    return (
        <>
            {/* toggle button */}
            <Button
                kind="secondary"
                size="md"
                hasIconOnly
                renderIcon={Settings}
                iconDescription="Live Customize"
                onClick={handleToggle}
                style={{
                    position: 'fixed',
                    right: '10px',
                    top: '25%',
                    zIndex: 1000,
                    borderRadius: '50% 50% 50% 4px'
                }}
            >
                <AnimateButton type="rotate">
                    <Settings size={24} />
                </AnimateButton>
            </Button>

            {open && (
                <Layer
                    style={{
                        position: 'fixed',
                        right: 0,
                        top: 0,
                        width: '280px',
                        height: '100vh',
                        backgroundColor: 'white',
                        zIndex: 1200,
                        boxShadow: '-2px 0 8px rgba(0,0,0,0.1)'
                    }}
                >
                    <PerfectScrollbar component="div">
                        <div style={{ padding: '24px' }}>
                            <div style={{ marginBottom: '24px' }}>
                                {/* font family */}
                                <SubCard title="Font Family">
                                    <RadioButtonGroup
                                        legendText=""
                                        name="font-family"
                                        valueSelected={fontFamily}
                                        onChange={(value) => setFontFamily(value)}
                                    >
                                        <RadioButton labelText="Roboto" value="Roboto" id="radio-roboto" />
                                        <RadioButton labelText="Poppins" value="Poppins" id="radio-poppins" />
                                        <RadioButton labelText="Inter" value="Inter" id="radio-inter" />
                                    </RadioButtonGroup>
                                </SubCard>
                            </div>
                            <div>
                                {/* border radius */}
                                <SubCard title="Border Radius">
                                    <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <span style={{ fontSize: '14px', fontWeight: 600, color: '#666' }}>4px</span>
                                        <div style={{ flex: 1 }}>
                                            <Slider
                                                labelText=""
                                                value={borderRadius}
                                                min={4}
                                                max={24}
                                                step={2}
                                                onChange={handleBorderRadius}
                                                hideTextInput
                                            />
                                        </div>
                                        <span style={{ fontSize: '14px', fontWeight: 600, color: '#666' }}>24px</span>
                                    </div>
                                    <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '12px', color: '#999' }}>
                                        {borderRadius}px
                                    </div>
                                </SubCard>
                            </div>
                        </div>
                    </PerfectScrollbar>
                    <Button
                        kind="ghost"
                        size="sm"
                        onClick={handleToggle}
                        style={{ position: 'absolute', top: '16px', right: '16px' }}
                    >
                        Close
                    </Button>
                </Layer>
            )}
        </>
    );
};

export default Customization;