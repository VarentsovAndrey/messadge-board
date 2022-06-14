import React, { FC } from 'react';
import { IItems } from '../../../../interfaces/IItems';
import ItemsField from '../ItemsField';

interface IProps {
  itemsDataAttr: IItems[];
}

const ItemsFieldComponent: FC<IProps> = ({ itemsDataAttr }) => {
  return (
    <div>
      {itemsDataAttr.length ? (
        itemsDataAttr.map((items) => {
          const { id, name, category, data, publication } = items;
          return (
            <React.Fragment key={`ItemsId:${id}`}>
              <ItemsField
                id={id}
                name={name}
                category={category}
                data={data}
                publication={publication}
              />
            </React.Fragment>
          );
        })
      ) : (
        <div>Товаров нет</div>
      )}
    </div>
  );
};

export default ItemsFieldComponent;
