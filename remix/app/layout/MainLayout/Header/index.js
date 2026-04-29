// carbon
import { Button } from '@carbon/react';
import { Menu } from '@carbon/icons-react';

// project imports
import LogoSection from '../LogoSection';
import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';

// types
import PropTypes from 'prop-types';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = ({ handleLeftDrawerToggle }) => {
    return (
        <>
            {/* logo & toggler button */}
            <div
                style={{
                    width: '228px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <div style={{ display: 'block', flexGrow: 1 }}>
                    <LogoSection />
                </div>
                <Button
                    kind="ghost"
                    size="md"
                    hasIconOnly
                    renderIcon={Menu}
                    iconDescription="Toggle menu"
                    onClick={handleLeftDrawerToggle}
                    style={{
                        borderRadius: '12px'
                    }}
                />
            </div>

            {/* header search */}
            <SearchSection />
            <div style={{ flexGrow: 1 }} />
            <div style={{ flexGrow: 1 }} />

            {/* notification & profile */}
            <NotificationSection />
            <ProfileSection />
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;