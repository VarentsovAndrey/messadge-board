import React, { FC } from 'react';
import Logo from '../../../../shared/Logo';

import style from './ItemsField.module.scss';

interface IProps {
  id: number;
  name: string;
  category: string;
  data: string;
  publication: string;
}

const ItemsField: FC<IProps> = ({ id, name, category, data, publication }) => {
  return (
    <div className={style.itemsField}>
      <p className={style.itemsField_name}>{name}</p>
      <p className={style.itemsField_category}>{category}</p>
      <p className={style.itemsField_data}>{data}</p>
      <p className={style.itemsField_publication}>{publication}</p>
      <button type="button" className={style.itemsField_button}>
        <Logo id="edit" />
      </button>
    </div>
  );
};

export default ItemsField;
