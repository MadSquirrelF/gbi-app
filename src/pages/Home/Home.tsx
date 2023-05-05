import { FC, useEffect, useState } from 'react'
import mainImage from '../../assets/images/home-image.png';
import Up from '../../components/Up';

const Home: FC = () => {

  const [scroll, setScroll] = useState(0);

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


  return (
    <div className="container">
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
      <div className='catalog-page'>
        <Up value={scroll} handleUpButton={handleUpButton} />
      </div>
    </div>
  )
}

export default Home