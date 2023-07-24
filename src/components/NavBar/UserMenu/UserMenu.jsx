import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from '../../../redux/auth/operations';

const UserMenu = () => {
  const userName = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <>
      <h3>Welcome, {userName}</h3>
      <button type="button" onClick={onLogOut}>
        Log Out
      </button>
    </>
  );
};

export default UserMenu;
