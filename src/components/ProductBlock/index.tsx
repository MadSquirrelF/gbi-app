import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import { selectCart } from "../../Redux/cart/selectors";
import { Link } from "react-router-dom";
import { CartItemType } from "../../Redux/cart/types";
import { addItem } from "../../Redux/cart/slice";

type ProductBlockProps = {
  id: string;
  title: string;
  prices: number[];
  imageUrl: string;
  sizes: string[];
  classification: string;
  structure: string;
}

export const ProductBlock: React.FC<ProductBlockProps> = ({ id, title, prices, imageUrl, sizes, classification, structure }) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const [activeSize, setActiveSize] = React.useState(0);
  const [activePrice, setActivePrice] = React.useState(0);

  const { items } = useSelector(selectCart);
  const count = items.filter((item: any) => item.id === id);
  const totalCount = count.reduce((sum: number, item: CartItemType) => sum + item.count, 0);

  const onClickChooseSize = (idx: number) => {
    setActiveSize(idx);
    setActivePrice(idx);
  };

  const onClickAdd = () => {
    const item: CartItemType = {
      id,
      title,
      price: prices[activePrice],
      imageUrl,
      size: sizes[activeSize],
      classification: classification,
      structure: structure,
      count: 0
    };
    dispatch(addItem(item));
  };

  return (
    <div className="product-block-wrapper">
      <div className="product-block">
        <Link key={id} to={`/product/${id}`} >
          <img className="product-block__image"  src={imageUrl} alt="Product" draggable={false} />
        </Link>
        <h4 className="product-block__title">{title}</h4>
        <p>Классификация: <span>{classification}</span></p>
        <p style={{ marginBottom: '10px'}}>Состав: <span>{structure}</span></p>
        <div className="product-block__selector">
          <ul>
            {sizes.map((size, i) => (
              <li
                key={i}
                onClick={() => onClickChooseSize(i)}
                className={activeSize === i ? 'active' : ''}>
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="product-block__bottom">
        <div className="product-block__price">от {prices[activePrice]} ₽
          </div>
          <button className="button button--outline button--add" onClick={onClickAdd}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>{totalCount}</i>
          </button>
        </div>
      </div>
    </div>
  );
}