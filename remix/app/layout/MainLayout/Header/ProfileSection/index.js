import { useNavigate } from '@remix-run/react';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

// carbon
import { Button, Search, Toggle, Tag, OverflowMenu, OverflowMenuItem } from '@carbon/react';
import { UserAvatar, Settings, Logout, User } from '@carbon/icons-react';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import UpgradePlanCard from './UpgradePlanCard';

// assets
import User1 from 'assets/images/users/user-round.svg';

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
    const customization = useSelector((state) => state.customization);
    const navigate = useNavigate();

    const [sdm, setSdm] = useState(true);
    const [value, setValue] = useState('');
    const [notification, setNotification] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    
    const handleLogout = async () => {
        console.log('Logout');
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const handleListItemClick = (event, index, route = '') => {
        setSelectedIndex(index);
        handleClose(event);

        if (route && route !== '') {
            navigate(route);
        }
    };
    
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <>
            <Button
                kind="tertiary"
                size="md"
                onClick={handleToggle}
                ref={anchorRef}
                style={{
                    height: '48px',
                    borderRadius: '27px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '0 8px'
                }}
            >
                <img
                    src={User1}
                    alt="User"
                    style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%'
                    }}
                />
                <Settings size={24} />
            </Button>
            
            {open && (
                <>
                    <div
                        onClick={handleClose}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            zIndex: 1000
                        }}
                    />
                    <div
                        style={{
                            position: 'fixed',
                            top: '88px',
                            right: '16px',
                            zIndex: 1001,
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                            width: '350px',
                            maxHeight: 'calc(100vh - 120px)',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{ padding: '16px' }}>
                            <div style={{ marginBottom: '16px' }}>
                                <div style={{ fontSize: '18px', fontWeight: 600 }}>
                                    Good Morning, <span style={{ fontWeight: 400 }}>Johne Doe</span>
                                </div>
                                <div style={{ fontSize: '14px', color: '#666', marginTop: '4px' }}>
                                    Project Admin
                                </div>
                            </div>
                            <Search
                                id="input-search-profile"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder="Search profile options"
                                labelText=""
                                size="sm"
                                style={{ marginBottom: '16px' }}
                            />
                            <div style={{ height: '1px', backgroundColor: '#e0e0e0', marginBottom: '16px' }} />
                        </div>
                        
                        <PerfectScrollbar
                            style={{
                                height: '100%',
                                maxHeight: 'calc(100vh - 350px)',
                                overflowX: 'hidden'
                            }}
                        >
                            <div style={{ padding: '0 16px 16px' }}>
                                <UpgradePlanCard />
                                <div style={{ height: '1px', backgroundColor: '#e0e0e0', margin: '16px 0' }} />
                                
                                <div style={{
                                    backgroundColor: '#f4f4f4',
                                    padding: '16px',
                                    borderRadius: '8px',
                                    marginBottom: '16px'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                                        <span style={{ fontSize: '14px' }}>Start DND Mode</span>
                                        <Toggle
                                            id="toggle-dnd"
                                            labelA=""
                                            labelB=""
                                            toggled={sdm}
                                            onToggle={(checked) => setSdm(checked)}
                                            size="sm"
                                        />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '14px' }}>Allow Notifications</span>
                                        <Toggle
                                            id="toggle-notifications"
                                            labelA=""
                                            labelB=""
                                            toggled={notification}
                                            onToggle={(checked) => setNotification(checked)}
                                            size="sm"
                                        />
                                    </div>
                                </div>
                                
                                <div style={{ height: '1px', backgroundColor: '#e0e0e0', marginBottom: '16px' }} />
                                
                                <div>
                                    <button
                                        onClick={(event) => handleListItemClick(event, 0, '#')}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            padding: '12px',
                                            border: 'none',
                                            background: selectedIndex === 0 ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                                            borderRadius: `${customization.borderRadius}px`,
                                            cursor: 'pointer',
                                            marginBottom: '4px'
                                        }}
                                    >
                                        <Settings size={20} />
                                        <span style={{ fontSize: '14px' }}>Account Settings</span>
                                    </button>
                                    
                                    <button
                                        onClick={(event) => handleListItemClick(event, 1, '#')}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            padding: '12px',
                                            border: 'none',
                                            background: selectedIndex === 1 ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                                            borderRadius: `${customization.borderRadius}px`,
                                            cursor: 'pointer',
                                            marginBottom: '4px'
                                        }}
                                    >
                                        <User size={20} />
                                        <span style={{ fontSize: '14px', flex: 1, textAlign: 'left' }}>Social Profile</span>
                                        <Tag type="red" size="sm">02</Tag>
                                    </button>
                                    
                                    <button
                                        onClick={handleLogout}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            padding: '12px',
                                            border: 'none',
                                            background: selectedIndex === 4 ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                                            borderRadius: `${customization.borderRadius}px`,
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <Logout size={20} />
                                        <span style={{ fontSize: '14px' }}>Logout</span>
                                    </button>
                                </div>
                            </div>
                        </PerfectScrollbar>
                    </div>
                </>
            )}
        </>
    );
};

export default ProfileSection;