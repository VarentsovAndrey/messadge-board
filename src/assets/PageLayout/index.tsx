import React from 'react';
import ButtonAdd from '../../shared/ButtonAdd';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import Sidebar from '../../shared/Sidebar';
import style from './PageLayout.module.scss';

const PageLayout = () => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <div className={style.content_wrapper}>
        <Sidebar />
        <ButtonAdd />
      </div>

      <Footer />
    </div>
  );
};

export default PageLayout;
