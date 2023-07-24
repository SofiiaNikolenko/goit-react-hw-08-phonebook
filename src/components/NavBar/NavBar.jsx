import * as React from 'react';
import { Outlet } from 'react-router-dom';
import AuthNav from './AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu/UserMenu';
import Navigation from './Navigation/Navigation';
import { tokenSelector } from 'redux/auth/selectors';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import css from './NavBar.module.css';

const NavBar = () => {
  const auth = useSelector(tokenSelector);
  return (
    <>
      <div className={css.navBar}>
        <Navigation />
        {auth ? <UserMenu /> : <AuthNav />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default NavBar;
