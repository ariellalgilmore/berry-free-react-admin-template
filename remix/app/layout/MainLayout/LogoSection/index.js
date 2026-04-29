import { useDispatch, useSelector } from 'react-redux';
import { Link } from '@remix-run/react';

// project imports
import { MENU_OPEN } from 'store/actions';
import Logo from 'ui-component/Logo';
import config from '../../../../config';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
    const defaultId = useSelector((state) => state.customization.defaultId);
    const dispatch = useDispatch();
    return (
        <Link 
            to={config.defaultPath}
            onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })}
            style={{ display: 'inline-block', textDecoration: 'none' }}
        >
            <Logo />
        </Link>
    );
};

export default LogoSection;