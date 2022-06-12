import React from 'react';
import Header from '../../shared/Header';
import Sidebar from '../../shared/Sidebar';
import style from './PageLayout.module.scss';

const PageLayout = () => {
  return (
    <div className={style.pageLayout}>
      <Header />
      <Sidebar />
    </div>
  );
};

export default PageLayout;
