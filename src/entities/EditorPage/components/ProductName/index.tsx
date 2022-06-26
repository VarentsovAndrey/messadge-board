import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import ButtonAdd from '../../../../shared/ButtonAdd';
import ItemsField from '../../../MainPage/components/ItemsField';
import ItemsFieldComponent from '../../../MainPage/components/ItemsFieldComponent';
import style from './ProductName.module.scss';

interface IProps {
  name: string;
}

const ProductName: FC<IProps> = ({ name }) => {
  return (
    <div className={style.caption}>
      <div>
        <h1 className={style.title}>{name}</h1>
      </div>
      <ButtonAdd />
    </div>
  );
};

export default ProductName;
