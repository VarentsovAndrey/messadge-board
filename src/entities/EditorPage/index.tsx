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

  // Вот тут странная запись, ты пытаешься деструктурировать
  // их массива с объектами значения (ремарка - так это видит тайпскрипт),
  // который по факту нет (потому что они лежат
  // не в массиве, а внутри каждого объекта).
  // Конкретно в этом случае через кастинг интерфейса ты обманываешь тайпскирпт.
  // Условно, машина черная, а ты говоришь, что она белая) но это не делает ее белой)

  // Поэтому сначала найди нужный элемент в массиве, положи его в переменную, а потом уже
  // из нее вытаскивай нужные значения.
  // Правда ТС еще будет ругаться, что у тебя Undefined может быть этой
  // переменной, так как не факт, что с нужной айдишкой элемент есть, надо подумать, как
  // выкрутиться) есть пара способов
  const {
    // В целом можешь id отсюда и не вытаскивать.
    // Переименовал, но не используется это значение все равно
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
