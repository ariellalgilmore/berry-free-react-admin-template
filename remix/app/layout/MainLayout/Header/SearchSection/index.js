import { useState } from 'react';

// carbon
import { Search, Button } from '@carbon/react';
import { Search as SearchIcon, Settings } from '@carbon/icons-react';

// types
import PropTypes from 'prop-types';

// ==============================|| SEARCH INPUT - MOBILE||============================== //

const MobileSearch = ({ value, setValue, onClose }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', width: '100%' }}>
            <Search
                id="input-search-header-mobile"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search"
                labelText=""
                size="md"
                style={{ flex: 1 }}
            />
            <Button
                kind="ghost"
                size="md"
                hasIconOnly
                renderIcon={Settings}
                iconDescription="Settings"
            />
            <Button
                kind="danger--ghost"
                size="md"
                onClick={onClose}
            >
                Close
            </Button>
        </div>
    );
};

MobileSearch.propTypes = {
    value: PropTypes.string,
    setValue: PropTypes.func,
    onClose: PropTypes.func
};

// ==============================|| SEARCH INPUT ||============================== //

const SearchSection = () => {
    const [value, setValue] = useState('');
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {/* Mobile search */}
            <div style={{ display: 'block' }}>
                <div style={{ marginLeft: '8px' }}>
                    <Button
                        kind="ghost"
                        size="md"
                        hasIconOnly
                        renderIcon={SearchIcon}
                        iconDescription="Search"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    />
                </div>
                {mobileOpen && (
                    <div
                        style={{
                            position: 'fixed',
                            top: '88px',
                            left: 0,
                            right: 0,
                            zIndex: 1100,
                            padding: '12px',
                            backgroundColor: 'white',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                        }}
                    >
                        <MobileSearch value={value} setValue={setValue} onClose={() => setMobileOpen(false)} />
                    </div>
                )}
            </div>

            {/* Desktop search */}
            <div style={{ display: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '16px', gap: '8px' }}>
                    <Search
                        id="input-search-header"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Search"
                        labelText=""
                        size="md"
                        style={{ width: '434px' }}
                    />
                    <Button
                        kind="ghost"
                        size="md"
                        hasIconOnly
                        renderIcon={Settings}
                        iconDescription="Settings"
                    />
                </div>
            </div>
        </>
    );
};

export default SearchSection;