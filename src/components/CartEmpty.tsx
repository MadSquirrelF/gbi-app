import React from 'react';
import emptyBusket from '../assets/images/emptyBusket.jpg';
import { Link } from 'react-router-dom';

export const CartEmpty: React.FC = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          Корзина пустая <i>😕</i>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё ничего.
          <br />
          Для того, чтобы заказать товар, перейди на главную страницу в раздел каталог.
        </p>
        <img src={emptyBusket} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};

