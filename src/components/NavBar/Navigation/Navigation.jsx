import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { tokenSelector } from '../../../redux/auth/selectors';
import css from './Navigation.module.css';

const Navigation = () => {
  const auth = useSelector(tokenSelector);

  return (
    <div className={css.navigation}>
      <NavLink to="/">Home</NavLink>
      {auth && <NavLink to="/contacts">Contacts</NavLink>}
    </div>
  );
};

export default Navigation;
