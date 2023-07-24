import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { tokenSelector } from '../../../redux/auth/selectors';
const Navigation = () => {
  const auth = useSelector(tokenSelector);

  return (
    <>
      <NavLink
        to="/"
        style={auth ? { marginRight: 25 } : { marginRight: 'auto' }}
      >
        Home
      </NavLink>
      {auth && (
        <NavLink to="/contacts" style={{ marginRight: 'auto' }}>
          Contacts
        </NavLink>
      )}
    </>
  );
};

export default Navigation;
