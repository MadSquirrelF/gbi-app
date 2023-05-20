/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSort } from '../Redux/filter/slice';
import { Sort as SortType, SortPropertyEnum, SortPropertyOrderEnum } from '../Redux/filter/types';
import { useOnClickOutside } from '../utils/useOnClickOutside';

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
  sortOrder: SortPropertyOrderEnum;
}

type SortPopupProps = {
  value: SortType;
};

export const list: SortItem[] = [
  { name: 'Высокие рейтинги ', sortProperty: SortPropertyEnum.RATING, sortOrder: SortPropertyOrderEnum.DESC },
  { name: 'Низкие рейтинги', sortProperty: SortPropertyEnum.RATING, sortOrder: SortPropertyOrderEnum.ASC },
  { name: 'Сначала дорогие', sortProperty: SortPropertyEnum.PRICE, sortOrder: SortPropertyOrderEnum.DESC },
  { name: 'Сначала дешевые', sortProperty: SortPropertyEnum.PRICE, sortOrder: SortPropertyOrderEnum.ASC },
  { name: 'С конца: Я-А', sortProperty: SortPropertyEnum.TITLE, sortOrder: SortPropertyOrderEnum.DESC },
  { name: 'С начала: А-Я', sortProperty: SortPropertyEnum.TITLE, sortOrder: SortPropertyOrderEnum.ASC },
];

export const Sort: React.FC<SortPopupProps> = React.memo(({ value }) => {

  const dispatch = useDispatch();

  const [isVisiblePopup, setVisiblePopup] = React.useState(false);

  const sortRef = React.useRef<HTMLDivElement>(null);

  useOnClickOutside(sortRef, () => setVisiblePopup(false));

  const changeSort = (obj: SortItem) => {
    dispatch(setSort(obj));
    setVisiblePopup(false);
  };

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <b>Сортировка:</b>
        <span onClick={() => setVisiblePopup(!isVisiblePopup)}>{value.name}</span>
      </div>
      {isVisiblePopup && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => changeSort(obj)}
                className={
                  value.sortProperty === obj.sortProperty && value.sortOrder === obj.sortOrder
                    ? 'active'
                    : ''
                }>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});


