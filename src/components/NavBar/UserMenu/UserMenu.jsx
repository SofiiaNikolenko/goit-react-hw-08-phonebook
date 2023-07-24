import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from '../../../redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const userName = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div className={css.userMenu}>
      <h3>Welcome, {userName}</h3>
      <button type="button" onClick={onLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
