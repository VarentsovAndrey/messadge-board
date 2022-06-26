import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { IItems } from '../../interfaces/IItems';
import { mockedItems } from '../../mocks/mockedItems';
import Logo from '../../shared/Logo';
import ButtonBack from './components/ButtonBack';
import ProductComponent from './components/ProductComponent';
import ProductName from './components/ProductName';
import style from './EditorPage.module.scss';

const EditorPage = () => {
  const { id } = useParams();

  const {
    id: productId,
    name,
    category,
    price,
  } = mockedItems.find((el) => el.id === Number(id)) as IItems;

  return (
    <>
      <ButtonBack />
      <ProductName name={name} />
      <ProductComponent name={name} category={category} price={price} />
    </>
  );
};

export default EditorPage;
