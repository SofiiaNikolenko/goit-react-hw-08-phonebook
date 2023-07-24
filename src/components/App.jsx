import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { refreshThunk } from '../redux/auth/operations';
import { isLoadingSelector } from '../redux/auth/selectors';
import Loader from './Loader/Loader';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Registration = lazy(() => import('../pages/Registration/Registration'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route
              index
              element={
                <Suspense fallback={<Loader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={
                    <Suspense fallback={<Loader />}>
                      <Login />
                    </Suspense>
                  }
                />
              }
            />
            <Route
              path="/registration"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={
                    <Suspense fallback={<Loader />}>
                      <Registration />
                    </Suspense>
                  }
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={
                    <Suspense fallback={<Loader />}>
                      <Contacts />
                    </Suspense>
                  }
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
