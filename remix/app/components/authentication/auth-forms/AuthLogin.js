import { useState } from 'react';
import { useSelector } from 'react-redux';

// carbon
import { Button, TextInput, PasswordInput, Checkbox, Grid, Column } from '@carbon/react';
import { View, ViewOff } from '@carbon/icons-react';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Google from 'assets/images/icons/social-google.svg';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
    const scriptedRef = useScriptRef();
    const customization = useSelector((state) => state.customization);
    const [checked, setChecked] = useState(true);

    const googleHandler = async () => {
        console.error('Login');
    };

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Grid>
                <Column sm={4} md={8} lg={16}>
                    <AnimateButton>
                        <Button
                            kind="tertiary"
                            onClick={googleHandler}
                            size="lg"
                            style={{ width: '100%' }}
                        >
                            <img src={Google} alt="google" width={16} height={16} style={{ marginRight: 8 }} />
                            Sign in with Google
                        </Button>
                    </AnimateButton>
                </Column>
                <Column sm={4} md={8} lg={16}>
                    <div style={{ display: 'flex', alignItems: 'center', margin: 'var(--cds-spacing-05) 0' }}>
                        <hr style={{ flexGrow: 1, border: 'none', borderTop: '1px solid var(--cds-border-subtle-01)' }} />
                        <span style={{ margin: '0 var(--cds-spacing-05)', color: 'var(--cds-text-secondary)' }}>OR</span>
                        <hr style={{ flexGrow: 1, border: 'none', borderTop: '1px solid var(--cds-border-subtle-01)' }} />
                    </div>
                </Column>
                <Column sm={4} md={8} lg={16}>
                    <div style={{ marginBottom: 'var(--cds-spacing-05)', textAlign: 'center' }}>
                        <p className="cds--label">Sign in with Email address</p>
                    </div>
                </Column>
            </Grid>

            <Formik
                initialValues={{
                    email: 'info@codedthemes.com',
                    password: '123456',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <TextInput
                            id="outlined-adornment-email-login"
                            labelText="Email Address / Username"
                            type="email"
                            value={values.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            invalid={Boolean(touched.email && errors.email)}
                            invalidText={touched.email && errors.email ? errors.email : ''}
                            style={{ marginBottom: 'var(--cds-spacing-05)' }}
                        />

                        <PasswordInput
                            id="outlined-adornment-password-login"
                            labelText="Password"
                            value={values.password}
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            invalid={Boolean(touched.password && errors.password)}
                            invalidText={touched.password && errors.password ? errors.password : ''}
                            showPasswordLabel="Show password"
                            hidePasswordLabel="Hide password"
                            style={{ marginBottom: 'var(--cds-spacing-05)' }}
                        />
                        
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--cds-spacing-05)' }}>
                            <Checkbox
                                id="remember-me"
                                labelText="Remember me"
                                checked={checked}
                                onChange={(event) => setChecked(event.target.checked)}
                            />
                            <a href="#" style={{ color: 'var(--cds-link-primary)', textDecoration: 'none', cursor: 'pointer' }}>
                                Forgot Password?
                            </a>
                        </div>
                        
                        {errors.submit && (
                            <div style={{ marginTop: 'var(--cds-spacing-05)', color: 'var(--cds-text-error)' }}>
                                {errors.submit}
                            </div>
                        )}

                        <div style={{ marginTop: 'var(--cds-spacing-05)' }}>
                            <AnimateButton>
                                <Button
                                    disabled={isSubmitting}
                                    size="lg"
                                    type="submit"
                                    kind="primary"
                                    style={{ width: '100%' }}
                                >
                                    Sign in
                                </Button>
                            </AnimateButton>
                        </div>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseLogin;
