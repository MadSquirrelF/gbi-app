/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullProduct: React.FC = () => {
  const [product, setProducts] = React.useState<{
    imageUrl: string,
    title: string,
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get('https://62f02dcbe2bca93cd2345814.mockapi.io/api/products' + id);
        setProducts(data);
      } catch (error) {
        alert('Ошибка при получении пиццы!');
        navigate('/');
      }
    }

    fetchProduct();
  }, []);

  if (!product) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <img src={product.imageUrl} alt="img product" />
      <h2>{product.title}</h2>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullProduct;
