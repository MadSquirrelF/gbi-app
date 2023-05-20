import { Link } from "react-router-dom"
import logo from '../../assets/images/logo_main.png';
import { useState } from "react";
import Modal from '../Modal/Modal';
function Header() {

  const [modalActive, setModalActive] = useState(false);
  
  return (
   <div className="header">
    <div className="container">
       <Link to="/">
          <div className="header__logo">
            <img src={logo} alt="company logo" draggable={false} />
          </div>
        </Link>

        <Modal active={modalActive} setActive={setModalActive}>
          <h1>Вход на сайт</h1>
          <p>Подарим подарок на день рождения, сохраним адрес доставки и расскажем об акциях</p>


        </Modal>

        <div className="header__login">
          <span className="button button--login" onClick={() => setModalActive(true)}>
            <p>Войти</p>
          </span>
        </div>
    </div>
   </div>
  )
}

export default Header