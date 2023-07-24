import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { registrationThunk } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
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
    const name = e.target.elements.name.value;
    const password = e.target.elements.password.value;
    const email = e.target.elements.email.value;
    if (!name || !password || !email) {
      alert('Please fill in all fields of the form');
      return;
    }
    dispatch(registrationThunk({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputName">Name</label>
        <input
          type="text"
          maxLength={15}
          onChange={handleChange}
          id="inputName"
          name="name"
          value={name}
        />
      </div>
      <div>
        <label htmlFor="inputEmail1">Email address</label>
        <input
          type="email"
          onChange={handleChange}
          id="inputEmail1"
          name="email"
          value={email}
        />
        <small id="emailHelp">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div>
        <label htmlFor="inputPassword1">Password</label>
        <input
          type="password"
          onChange={handleChange}
          id="inputPassword1"
          name="password"
          value={password}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
