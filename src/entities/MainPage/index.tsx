import React from 'react';
import InputSearch from './components/InputSearch';
import Title from './components/Title';
import style from './MainPage.module.scss';

const MainPage = () => {
  return (
    <section className={style.mainPage}>
      <Title />
      <InputSearch />
    </section>
  );
};

export default MainPage;
