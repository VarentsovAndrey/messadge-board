import React from 'react';
import Logo from '../../shared/Logo';
import ButtonBack from './components/ButtonBack';
import ProductComponent from './components/ProductComponent';
import ProductName from './components/ProductName';
import style from './EditorPage.module.scss';

const EditorPage = () => {
  return (
    <>
      <ButtonBack />
      <ProductName />
      <ProductComponent />
    </>
  );
};

export default EditorPage;
