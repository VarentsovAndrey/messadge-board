import React, { FC, useEffect, useState } from 'react';
import { IItems } from '../../../../interfaces/IItems';
import { mockedItems } from '../../../../mocks/mockedItems';

import style from './ItemsField.module.scss';

const ItemsField = () => {
  const [itemsData, setItemsData] = useState<IItems[] | null>(null);
  useEffect(() => {
    fetch(mockedItems)
      .then((response) => response.json())
      .then((data) => setItemsData(data));
  }, []);

  return <ItemsFieldComponent itemsDataAttr={itemsData} />;
};

export default ItemsField;
