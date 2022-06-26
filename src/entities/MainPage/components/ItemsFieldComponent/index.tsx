import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { IItems } from '../../../../interfaces/IItems';
import Pagination from '../../../../shared/Pagination';
import ItemsField from '../ItemsField';

interface IProps {
  itemsDataAttr: IItems[];
}

const ItemsFieldComponent: FC<IProps> = ({ itemsDataAttr }) => {
  const { search } = useLocation();
  const currentPageNumber = new URLSearchParams(search).get('page');

  const paginatedUserData = itemsDataAttr.slice(
    (Number(currentPageNumber) - 1) * 8,
    Number(currentPageNumber) * 8
  );
  return (
    <div>
      {paginatedUserData.length ? (
        paginatedUserData.map((items) => {
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
      <Pagination limit={8} itemsAmount={itemsDataAttr.length} />
    </div>
  );
};

export default ItemsFieldComponent;
