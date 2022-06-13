import React from 'react';
import Title from './components/Title';
import style from './MainPage.module.scss';

const MainPage = () => {
  return (
    <section className={style.mainPage}>
      <Title />
    </section>
  );
};

export default MainPage;
