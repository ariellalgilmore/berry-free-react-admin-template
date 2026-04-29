import { Outlet } from '@remix-run/react';
import { useDispatch, useSelector } from 'react-redux';

// project imports
import { SET_MENU } from 'store/actions';
import { drawerWidth } from 'store/constant';
import navigation from 'menu-items';
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import Customization from 'layout/Customization';
import Header from './Header';
import Sidebar from './Sidebar';

// assets
import { ChevronRight } from '@carbon/icons-react';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    // Handle left drawer
    const leftDrawerOpened = useSelector((state) => state.customization.opened);
    const dispatch = useDispatch();
    const handleLeftDrawerToggle = () => {
        dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
    };

    return (
        <div style={{ display: 'flex' }}>
            {/* header */}
            <header
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: '#ffffff',
                    zIndex: 1100,
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}
            >
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    padding: '0 24px',
                    minHeight: '88px'
                }}>
                    <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </div>
            </header>

            {/* drawer */}
            <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

            {/* main content */}
            <main
                style={{
                    flexGrow: 1,
                    padding: '24px',
                    marginTop: '88px',
                    marginLeft: leftDrawerOpened ? `${drawerWidth}px` : '20px',
                    width: leftDrawerOpened ? `calc(100% - ${drawerWidth}px)` : `calc(100% - 40px)`,
                    transition: 'margin-left 0.3s ease, width 0.3s ease',
                    minHeight: 'calc(100vh - 88px)'
                }}
            >
                {/* breadcrumb */}
                <Breadcrumbs separator={ChevronRight} navigation={navigation} icon title rightAlign />
                <Outlet />
            </main>
            <Customization />
        </div>
    );
};

export default MainLayout;