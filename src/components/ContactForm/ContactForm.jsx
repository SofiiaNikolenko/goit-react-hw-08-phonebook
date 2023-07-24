// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContactThunk } from '../../redux/contacts/operations';
// import { contactsSelector } from '../../redux/contacts/selectors';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({ name: '', phone: '' });
//   const [formErrors, setFormErrors] = useState({ name: '', phone: '' });
//   const contacts = useSelector(contactsSelector);
//   const dispatch = useDispatch();

//   const handleChange = event => {
//     const { name, value } = event.target;
//     setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
//     setFormErrors(prevFormErrors => ({ ...prevFormErrors, [name]: '' }));
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     const { name: newName, phone } = formData;

//     if (contacts.some(({ name }) => newName === name)) {
//       alert(`${newName} is already in contacts`);
//       return;
//     }

//     dispatch(addContactThunk({ name: newName, phone: phone.toString() }));

//     setFormData({ name: '', phone: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <label>
//         Name
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </label>
//       {formErrors.name && <span>{formErrors.name}</span>}

//       <label>
//         Number
//         <input
//           type="text"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//       </label>

//       {formErrors.phone && <span>{formErrors.phone}</span>}
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };

// export default ContactForm;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from '../../redux/contacts/operations';
import { contactsSelector } from '../../redux/contacts/selectors';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactForm = () => {
  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    phone: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, phone } = formValues;

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    if (!name || !phone) {
      setFormErrors({
        name: name ? '' : 'Name should not be empty',
        phone: phone ? '' : 'Phone number should not be empty',
      });
      return;
    }

    if (!phoneRegExp.test(phone)) {
      setFormErrors({
        ...formErrors,
        phone: 'Phone number is not valid',
      });
      return;
    }

    dispatch(addContactThunk({ name, number: phone.toString() }));
    setFormValues({ name: '', phone: '' });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          {formErrors.name && <span>{formErrors.name}</span>}
        </label>
      </div>

      <div>
        <label>
          Number
          <input
            type="tel"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
          />
          {formErrors.phone && <span>{formErrors.phone}</span>}
        </label>
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
