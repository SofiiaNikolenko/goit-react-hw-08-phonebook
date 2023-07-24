import React from 'react';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.homeContainer}>
      <h1 className={css.homeTitle}>Welcome to Contact Book!</h1>
      <p className={css.homeDescription}>
        This is a convenient contact book application where you can store and
        manage your contacts easily. You can add new contacts, edit existing
        ones, and also delete any contacts you no longer need. Use the search
        feature to quickly find the contacts you are looking for. Get started by
        navigating to the "Contacts" page using the menu above. Happy
        organizing!
      </p>
    </div>
  );
};

export default Home;
