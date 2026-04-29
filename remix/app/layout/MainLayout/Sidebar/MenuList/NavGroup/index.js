// project imports
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';

// types 
import PropTypes from 'prop-types';

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
    // menu list collapse & items
    const items = item.children?.map((menu) => {
        switch (menu.type) {
            case 'collapse':
                return <NavCollapse key={menu.id} menu={menu} level={1} />;
            case 'item':
                return <NavItem key={menu.id} item={menu} level={1} />;
            default:
                return (
                    <div key={menu.id} style={{ 
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

    return (
        <>
            <div>
                {item.title && (
                    <div style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        color: '#666',
                        padding: '8px 16px',
                        marginTop: '8px'
                    }}>
                        {item.title}
                        {item.caption && (
                            <div style={{
                                fontSize: '11px',
                                fontWeight: 400,
                                textTransform: 'none',
                                color: '#999',
                                marginTop: '4px'
                            }}>
                                {item.caption}
                            </div>
                        )}
                    </div>
                )}
                <div>
                    {items}
                </div>
            </div>

            {/* group divider */}
            <div style={{ 
                height: '1px',
                backgroundColor: '#e0e0e0',
                marginTop: '4px',
                marginBottom: '16px'
            }} />
        </>
    );
};

NavGroup.propTypes = {
    item: PropTypes.object
};

export default NavGroup;