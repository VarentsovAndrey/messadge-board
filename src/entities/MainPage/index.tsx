import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mockedItems } from '../../mocks/mockedItems';
import DropDownMenu from './components/DropDownMenu';
import InputSearch from './components/InputSearch';

import ItemsFieldComponent from './components/ItemsFieldComponent';

import Table from './components/Table';
import Title from './components/Title';

import style from './MainPage.module.scss';

const MainPage = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/main_page');
    }
    if (!search) {
      navigate('?page=1');
    }
  }, [pathname, navigate, search]);

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
