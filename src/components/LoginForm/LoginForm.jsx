import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.loginForm} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          onChange={handleChange}
          name="email"
          value={email}
          type="email"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div>
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          onChange={handleChange}
          name="password"
          value={password}
          type="password"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
