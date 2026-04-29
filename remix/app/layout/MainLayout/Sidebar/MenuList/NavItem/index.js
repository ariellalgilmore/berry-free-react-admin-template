import { Link } from '@remix-run/react';
import { forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// carbon
import { Tag } from '@carbon/react';
import { CircleFilled } from '@carbon/icons-react';

// project imports
import { MENU_OPEN, SET_MENU } from 'store/actions';

// types
import PropTypes from 'prop-types';

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }) => {
    const dispatch = useDispatch();
    const customization = useSelector((state) => state.customization);

    const Icon = item.icon;
    const itemIcon = item?.icon ? (
        <Icon stroke={1.5} size="1.3rem" />
    ) : (
        <CircleFilled
            size={customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6}
        />
    );

    let itemTarget = '_self';
    if (item.target) {
        itemTarget = '_blank';
    }

    let listItemProps = {
        component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />)
    };
    if (item?.external) {
        listItemProps = { component: 'a', href: item.url, target: itemTarget };
    }

    const itemHandler = (id) => {
        dispatch({ type: MENU_OPEN, id });
        dispatch({ type: SET_MENU, opened: false });
    };

    // active menu item on page load
    useEffect(() => {
        const currentIndex = document.location.pathname
            .toString()
            .split('/')
            .findIndex((id) => id === item.id);
        if (currentIndex > -1) {
            dispatch({ type: MENU_OPEN, id: item.id });
        }
        // eslint-disable-next-line
    }, []);

    const isSelected = customization.isOpen.findIndex((id) => id === item.id) > -1;

    return (
        <button
            {...listItemProps}
            disabled={item.disabled}
            onClick={() => itemHandler(item.id)}
            style={{
                display: 'flex',
                alignItems: 'flex-start',
                width: '100%',
                border: 'none',
                background: isSelected ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
                borderRadius: `${customization.borderRadius}px`,
                marginBottom: '4px',
                padding: level > 1 ? '8px' : '10px',
                paddingLeft: `${level * 24}px`,
                cursor: item.disabled ? 'not-allowed' : 'pointer',
                textAlign: 'left',
                opacity: item.disabled ? 0.5 : 1
            }}
        >
            <div style={{ minWidth: !item?.icon ? 18 : 36, marginTop: 'auto', marginBottom: 'auto' }}>
                {itemIcon}
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ 
                    fontSize: isSelected ? '16px' : '14px',
                    fontWeight: isSelected ? 600 : 400,
                    color: 'inherit'
                }}>
                    {item.title}
                </div>
                {item.caption && (
                    <div style={{ 
                        fontSize: '12px',
                        color: '#666',
                        marginTop: '4px'
                    }}>
                        {item.caption}
                    </div>
                )}
            </div>
            {item.chip && (
                <Tag
                    type={item.chip.color === 'primary' ? 'blue' : item.chip.color}
                    size={item.chip.size === 'small' ? 'sm' : 'md'}
                >
                    {item.chip.label}
                </Tag>
            )}
        </button>
    );
};

NavItem.propTypes = {
    item: PropTypes.object,
    level: PropTypes.number
};

export default NavItem;