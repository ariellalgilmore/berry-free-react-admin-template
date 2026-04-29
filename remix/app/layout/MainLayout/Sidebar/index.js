// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';

// types
import PropTypes from 'prop-types';

// project imports
import MenuList from './MenuList';
import LogoSection from '../LogoSection';
import MenuCard from './MenuCard';
import { drawerWidth } from 'store/constant';

// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
    const drawer = (
        <>
            <div style={{ display: 'block' }}>
                <div style={{ display: 'flex', padding: '16px', margin: 'auto' }}>
                    <LogoSection />
                </div>
            </div>
            <BrowserView>
                <PerfectScrollbar
                    component="div"
                    style={{
                        height: 'calc(100vh - 88px)',
                        paddingLeft: '16px',
                        paddingRight: '16px'
                    }}
                >
                    <MenuList />
                    <MenuCard />
                </PerfectScrollbar>
            </BrowserView>
            <MobileView>
                <div style={{ padding: '0 16px' }}>
                    <MenuList />
                    <MenuCard />
                </div>
            </MobileView>
        </>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <nav style={{ flexShrink: 0, width: drawerWidth }} aria-label="mailbox folders">
            <div
                style={{
                    position: drawerOpen ? 'fixed' : 'relative',
                    left: drawerOpen ? 0 : '-100%',
                    top: '88px',
                    width: drawerWidth,
                    height: 'calc(100vh - 88px)',
                    backgroundColor: '#ffffff',
                    color: '#161616',
                    borderRight: 'none',
                    transition: 'left 0.3s ease',
                    zIndex: 1000,
                    overflowY: 'auto'
                }}
            >
                {drawer}
            </div>
            {drawerOpen && (
                <div
                    onClick={drawerToggle}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 999
                    }}
                />
            )}
        </nav>
    );
};

Sidebar.propTypes = {
    drawerOpen: PropTypes.bool,
    drawerToggle: PropTypes.func,
    window: PropTypes.object
};

export default Sidebar;