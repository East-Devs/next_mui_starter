import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormGroup, CircularProgress, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import { object, string } from 'yup';

import { ColorButton, MarginBox } from '../../components/styled/Index';
import customAxios, { setAuthHeader } from '../../store/customAxios';
import AuthWrapper from '../../components/layout/AuthWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../store/usersSlice';
import { errMsg } from '../../utility/utils';
import { URL } from '../../const';

const initialValues = {
  identifier: '',
  password: '',
};

const Login = ({ isAuthenticated = false }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.users?.user?.type);

  React.useEffect(() => {
    if (userType) {
      router.push('/');
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);
  const [loading, setLoading] = React.useState(false);

  return (
    <AuthWrapper title="Glad to see you again!">
      <Formik
        validationSchema={object({
          password: string()
            .required('password should be minimum 8character!!!')
            .min(8),
          identifier: string().email(),
        })}
        initialValues={initialValues}
        onSubmit={async (values) => {
          setLoading(true);
          try {
            delete customAxios.defaults.headers.common['Authorization'];
            const res = await customAxios.post(`${URL}/auth/local`, values);
            setAuthHeader(res.data?.jwt);
            dispatch(signIn(res.data));
            router.push('/');
            toast.success('User Logged In successfully...');
            console.log(res);
          } catch (error) {
            errMsg(error);
          }
          setLoading(false);
        }}
      >
        {({ handleSubmit }) => (
          <Form sx={{ width: '100%', marginTop: '8px' }}>
            <MarginBox>
              <FormGroup>
                <Field
                  name="identifier"
                  as={TextField}
                  label="Your Email Address"
                  variant="outlined"
                />
                <ErrorMessage
                  component="div"
                  style={{ color: 'red' }}
                  name="identifier"
                />
              </FormGroup>
            </MarginBox>
            <MarginBox>
              <FormGroup>
                <Field
                  name="password"
                  type="password"
                  as={TextField}
                  label="Your password"
                  variant="outlined"
                />
                <ErrorMessage
                  component="div"
                  style={{ color: 'red' }}
                  name="password"
                />
              </FormGroup>
            </MarginBox>

            <ColorButton
              disabled={loading}
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              startIcon={loading ? <CircularProgress size="1rem" /> : undefined}
            >
              {loading ? 'Submitting' : 'Sign In'}
            </ColorButton>
          </Form>
        )}
      </Formik>
    </AuthWrapper>
  );
};

export default Login;
