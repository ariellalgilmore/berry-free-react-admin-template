// project imports
import NavGroup from './NavGroup';
import menuItems from 'menu-items';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
    const navItems = menuItems.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
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

    return <>{navItems}</>;
};

export default MenuList;