import { useLocation } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// carbon
import { ChevronDown, ChevronUp, CircleFilled } from '@carbon/icons-react';

// project imports
import NavItem from '../NavItem';

// types
import PropTypes from 'prop-types';

// ==============================|| SIDEBAR MENU LIST COLLAPSE ITEMS ||============================== //

const NavCollapse = ({ menu, level }) => {
    const customization = useSelector((state) => state.customization);

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleClick = () => {
        setOpen(!open);
        setSelected(!selected ? menu.id : null);
    };

    const { pathname } = useLocation();
    const checkOpenForParent = (child, id) => {
        child.forEach((item) => {
            if (item.url === pathname) {
                setOpen(true);
                setSelected(id);
            }
        });
    };

    // menu collapse for sub-levels
    useEffect(() => {
        setOpen(false);
        setSelected(null);
        if (menu.children) {
            menu.children.forEach((item) => {
                if (item.children?.length) {
                    checkOpenForParent(item.children, menu.id);
                }
                if (item.url === pathname) {
                    setSelected(menu.id);
                    setOpen(true);
                }
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, menu.children]);

    // menu collapse & item
    const menus = menu.children?.map((item) => {
        switch (item.type) {
            case 'collapse':
                return <NavCollapse key={item.id} menu={item} level={level + 1} />;
            case 'item':
                return <NavItem key={item.id} item={item} level={level + 1} />;
            default:
                return (
                    <div key={item.id} style={{ 
                        fontSize: '16px',
                        fontWeight: 600,
                        color: '#da1e28',
                        textAlign: 'center',
                        padding: '8px'
                    }}>
                        Menu Items Error
                    </div>
                );
        }
    });

    const Icon = menu.icon;
    const menuIcon = menu.icon ? (
        <Icon strokeWidth={1.5} size="1.3rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
    ) : (
        <CircleFilled
            size={selected === menu.id ? 8 : 6}
        />
    );

    return (
        <>
            <button
                onClick={handleClick}
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    width: '100%',
                    border: 'none',
                    background: selected === menu.id ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                    borderRadius: `${customization.borderRadius}px`,
                    marginBottom: '4px',
                    padding: level > 1 ? '8px' : '10px',
                    paddingLeft: `${level * 24}px`,
                    cursor: 'pointer',
                    textAlign: 'left'
                }}
            >
                <div style={{ minWidth: !menu.icon ? 18 : 36, marginTop: 'auto', marginBottom: 'auto' }}>
                    {menuIcon}
                </div>
                <div style={{ flex: 1, marginTop: 'auto', marginBottom: 'auto' }}>
                    <div style={{ 
                        fontSize: selected === menu.id ? '16px' : '14px',
                        fontWeight: selected === menu.id ? 600 : 400,
                        color: 'inherit'
                    }}>
                        {menu.title}
                    </div>
                    {menu.caption && (
                        <div style={{ 
                            fontSize: '12px',
                            color: '#666',
                            marginTop: '4px'
                        }}>
                            {menu.caption}
                        </div>
                    )}
                </div>
                <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                    {open ? (
                        <ChevronUp size={16} />
                    ) : (
                        <ChevronDown size={16} />
                    )}
                </div>
            </button>
            {open && (
                <div style={{
                    position: 'relative',
                    paddingLeft: '0'
                }}>
                    <div style={{
                        position: 'absolute',
                        left: '32px',
                        top: 0,
                        height: '100%',
                        width: '1px',
                        backgroundColor: '#e0e0e0'
                    }} />
                    {menus}
                </div>
            )}
        </>
    );
};

NavCollapse.propTypes = {
    menu: PropTypes.object,
    level: PropTypes.number
};

export default NavCollapse;