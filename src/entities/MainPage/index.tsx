import React from 'react';
import { mockedItems } from '../../mocks/mockedItems';
import InputSearch from './components/InputSearch';
import ItemsField from './components/ItemsField';
import ItemsFieldComponent from './components/ItemsFieldComponent';

import Table from './components/Table';
import Title from './components/Title';

import style from './MainPage.module.scss';

const MainPage = () => {
  return (
    <section className={style.mainPage}>
      <Title />
      <InputSearch />
      <Table />
      <ItemsFieldComponent itemsDataAttr={mockedItems} />
    </section>
  );
};

export default MainPage;