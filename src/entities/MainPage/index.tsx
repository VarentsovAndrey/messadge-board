import React from 'react';
import InputSearch from './components/InputSearch';

import Table from './components/Table';
import Title from './components/Title';

import style from './MainPage.module.scss';

const MainPage = () => {
  return (
    <section className={style.mainPage}>
      <Title />
      <InputSearch />
      <Table />
    </section>
  );
};

export default MainPage;
