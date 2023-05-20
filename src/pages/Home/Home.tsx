import { FC, useCallback, useEffect, useRef, useState } from 'react'
import mainImage from '../../assets/images/home-bg.jpg';
import Up from '../../components/Up';
import { Categories } from '../../components/Categories';
import { Sort } from '../../components/Sort';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../Redux/store';
import { useSelector } from 'react-redux';
import { selectProductData } from '../../Redux/product/selectors';
import { selectFilter } from '../../Redux/filter/selectors';
import { setCategoryId } from '../../Redux/filter/slice';
import { fetchProducts } from '../../Redux/product/asyncActions';
import qs from 'qs';
import ErrorSticker from '../../assets/images/error.png';
import { ProductBlock } from '../../components/ProductBlock';
import Search from '../../components/Search';
import { Skeleton } from '../../components/ProductBlock/Skeleton';
import emptyProduct from '../../assets/images/empty-product.png';

const Home: FC = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isMounted = useRef(false);

  const [scroll, setScroll] = useState(0);

  const { items, status } = useSelector(selectProductData);

  const { categoryId, sort, searchValue } = useSelector(selectFilter);

  const sortType = sort;

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  const handleUpButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onChangeCategory = useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProducts = async () => {
    const category = categoryId > 0 ? String(categoryId) : '';
    const search = searchValue;
    const order = sortType.sortOrder;
    const sortBy = sortType.sortProperty;
    dispatch(
      fetchProducts({
        category,
        sortBy,
        order,
        search,
      }),
    );
  };

  useEffect(() => {
    getProducts();
    window.scrollTo(0, scroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sortType, searchValue]);


  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        sortOrder: sort.sortOrder,
        categoryId,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort.sortProperty, sort.sortOrder]);

  const products = items.map((obj: any) => <ProductBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <Up value={scroll} handleUpButton={handleUpButton} />
      <div className='home-page'>
          <div className="home-page__title">
            <h1>ГК «Объединённая Домостроительная Корпорация»</h1>
            <p>Группа компаний «ОДСК» - это новый формат системы, которая способна самосовершенствоваться, подстраиваться под требования рынка,
              одновременно оказывая влияние на его формирование.В структуру корпорации входят производственные, строительные, 
              логические и управленческие мощности, работа которых координируется в непрерывном поточном режиме.</p>
          </div>
          <div className="home-page__imageContainer">
            <img src={mainImage} alt="mainImage" draggable={false} />
          </div>
      </div>
      <div className="search_container" id='catalog'>
        <div>
          <h2 className="content__title">Наши ЖБИ изделия</h2>
          <p>Наща миссия: мы создаем комфортную среду, которая помогает людям в полной мере раскрыть свой потенициал и реализовать свои устревления</p>
        </div>
        
        <Search />
      </div>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      {
        status === 'error' ? (
          <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>

          <p>
            К сожалению, не удалось сохранить товары.
            <br />
            Попробуйте повторить попытку!
          </p>
          <img src={ErrorSticker} alt="Error products" />
        </div>
        ) : status === 'loading' ? (
          <div className="content__items">
            {skeletons}
          </div>
        ) : products.length > 0 ? (
          <div className="content__items">{products}</div>
        ) : (
          <div className="content__error-info">
          <h2>Не удалось найти товар 😕</h2>
          <p>
            Попробуйте выбрать что-то другое!
          </p>
          <img src={emptyProduct} alt="empty products" />
        </div>
        )
      }
     
    </div>
  )
}

export default Home