import { Link } from '@remix-run/react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// carbon
import { Button, TextInput, PasswordInput, Checkbox, Grid, Column } from '@carbon/react';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import Google from 'assets/images/icons/social-google.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = ({ ...others }) => {
    const scriptedRef = useScriptRef();
    const customization = useSelector((state) => state.customization);
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(true);

    const [strength, setStrength] = useState(0);
    const [level, setLevel] = useState();

    const googleHandler = async () => {
        console.error('Register');
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('123456');
    }, []);

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
                            Sign up with Google
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
                        <p className="cds--label">Sign up with Email address</p>
                    </div>
                </Column>
            </Grid>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
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
                        <Grid>
                            <Column sm={2} md={4} lg={8}>
                                <TextInput
                                    id="fname"
                                    labelText="First Name"
                                    name="fname"
                                    type="text"
                                    defaultValue=""
                                    style={{ marginBottom: 'var(--cds-spacing-05)' }}
                                />
                            </Column>
                            <Column sm={2} md={4} lg={8}>
                                <TextInput
                                    id="lname"
                                    labelText="Last Name"
                                    name="lname"
                                    type="text"
                                    defaultValue=""
                                    style={{ marginBottom: 'var(--cds-spacing-05)' }}
                                />
                            </Column>
                        </Grid>
                        
                        <TextInput
                            id="outlined-adornment-email-register"
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
                            id="outlined-adornment-password-register"
                            labelText="Password"
                            value={values.password}
                            name="password"
                            onBlur={handleBlur}
                            onChange={(e) => {
                                handleChange(e);
                                changePassword(e.target.value);
                            }}
                            invalid={Boolean(touched.password && errors.password)}
                            invalidText={touched.password && errors.password ? errors.password : ''}
                            showPasswordLabel="Show password"
                            hidePasswordLabel="Hide password"
                            style={{ marginBottom: 'var(--cds-spacing-05)' }}
                        />

                        {strength !== 0 && (
                            <div style={{ marginBottom: 'var(--cds-spacing-05)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--cds-spacing-03)' }}>
                                    <div
                                        style={{ 
                                            backgroundColor: level?.color, 
                                            width: '85px', 
                                            height: '8px'
                                        }}
                                    />
                                    <span style={{ fontSize: '0.75rem' }}>{level?.label}</span>
                                </div>
                            </div>
                        )}

                        <div style={{ marginBottom: 'var(--cds-spacing-05)' }}>
                            <Checkbox
                                id="terms-checkbox"
                                labelText={
                                    <span>
                                        Agree with{' '}
                                        <Link to="#" style={{ color: 'var(--cds-link-primary)' }}>
                                            Terms & Condition.
                                        </Link>
                                    </span>
                                }
                                checked={checked}
                                onChange={(event) => setChecked(event.target.checked)}
                            />
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
                                    Sign up
                                </Button>
                            </AnimateButton>
                        </div>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FirebaseRegister;
