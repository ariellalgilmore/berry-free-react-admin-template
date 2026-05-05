// ==============================|| AUTHENTICATION 1 WRAPPER ||============================== //

const AuthWrapper1 = ({ children, ...props }) => (
    <div 
        style={{ 
            backgroundColor: 'var(--cds-layer-01)', 
            minHeight: '100vh' 
        }}
        {...props}
    >
        {children}
    </div>
);

export default AuthWrapper1;
