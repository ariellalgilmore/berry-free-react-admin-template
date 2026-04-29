import { Link } from '@remix-run/react';
import { useState, useRef, useEffect } from 'react';

// carbon
import { Button, Tag, Select, SelectItem } from '@carbon/react';
import { Notification } from '@carbon/icons-react';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import NotificationList from './NotificationList';

// notification status options
const status = [
    {
        value: 'all',
        label: 'All Notification'
    },
    {
        value: 'new',
        label: 'New'
    },
    {
        value: 'unread',
        label: 'Unread'
    },
    {
        value: 'other',
        label: 'Other'
    }
];

// ==============================|| NOTIFICATION ||============================== //

const NotificationSection = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('all');
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    const handleChange = (event) => {
        if (event?.target?.value) setValue(event.target.value);
    };

    return (
        <>
            <div style={{ marginLeft: '8px', marginRight: '24px' }}>
                <Button
                    kind="ghost"
                    size="md"
                    hasIconOnly
                    renderIcon={Notification}
                    iconDescription="Notifications"
                    onClick={handleToggle}
                    ref={anchorRef}
                    style={{
                        borderRadius: '12px'
                    }}
                />
            </div>
            
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
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ fontSize: '14px', fontWeight: 600 }}>All Notification</span>
                                    <Tag type="red" size="sm">01</Tag>
                                </div>
                                <Link to="#" style={{ fontSize: '14px', color: '#0f62fe', textDecoration: 'none' }}>
                                    Mark as all read
                                </Link>
                            </div>
                            
                            <PerfectScrollbar
                                style={{
                                    height: '100%',
                                    maxHeight: 'calc(100vh - 205px)',
                                    overflowX: 'hidden'
                                }}
                            >
                                <div style={{ marginBottom: '16px' }}>
                                    <Select
                                        id="notification-filter"
                                        labelText=""
                                        value={value}
                                        onChange={handleChange}
                                        size="sm"
                                    >
                                        {status.map((option) => (
                                            <SelectItem
                                                key={option.value}
                                                value={option.value}
                                                text={option.label}
                                            />
                                        ))}
                                    </Select>
                                </div>
                                <div style={{ height: '1px', backgroundColor: '#e0e0e0', marginBottom: '16px' }} />
                                <NotificationList />
                            </PerfectScrollbar>
                        </div>
                        <div style={{ height: '1px', backgroundColor: '#e0e0e0' }} />
                        <div style={{ padding: '12px', textAlign: 'center' }}>
                            <Button kind="ghost" size="sm">
                                View All
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default NotificationSection;