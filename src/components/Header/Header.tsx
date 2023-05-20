import { Link } from "react-router-dom"
import logo from '../../assets/images/logo_main.png';
import { useState } from "react";
import Modal from '../Modal/Modal';

import Loader from "../Loader/Loader";
import axios from "axios";
import Error from "../Error/Error";

function Header() {

  const [modalActive, setModalActive] = useState(false);

  const [isPasswordShown, setPasswordShown] = useState(false);

  const [login, setLogin] = useState(``);
  const [password, setPassword] = useState(``);

  const isLoginInvalid = !login || !login.length;
  const isPasswordInvalid = !password || !password.length;

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(``);

  async function onLogin({ login, password }: { login: string; password: string }) {
    setIsLoading(true);
    try {
      const { data } = await axios.post(`auth/login`, {
        login,
        password,
      });

  
    } catch (error: any) {
      setErrorMessage(error.response.data.msg);
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
   <div className="header">
    <div className="container">
       <Link to="/">
          <div className="header__logo">
            <img src={logo} alt="company logo" draggable={false} />
          </div>
        </Link>

        <Modal active={modalActive} setActive={setModalActive}>
          <h1>Вход в личный кабинет</h1>
          <p>Подарим подарок на день рождения, сохраним адрес доставки и расскажем об акциях</p>

          <form className="header__form" onSubmit={(e) => {
            e.preventDefault()
          }}>

         <div className="header__field-box">
              <label
                className="header__label"
                htmlFor="login"
              >
                Логин
              </label>
              <div className="header__input-wrapper">
                <input
                  type="text"
                  className="header__input"
                  placeholder="Введите логин"
                  id="login"
                  name="login"
          
                  value={login}
                  required
                  onChange={(e) => setLogin(e.target.value.trim())}
                />
              </div>
        </div>

        <div className="header__field-box">
            <label
              className="header__label"
              htmlFor="password"
            >
              Пароль
            </label>
            <div className="header__input-wrapper header__input-wrapper--password">
              <input
                type={isPasswordShown ? `text` : `password`}
                className="header__input"
                placeholder="Введите пароль"
                id="password"
        
                name="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value.trim())}
              />
            <button
              type="button"
              className="btn btn--eye header__password-switch-btn"
              onClick={() => setPasswordShown(!isPasswordShown)}
            >
              {isPasswordShown ? (
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_37_3506)">
                    <path d="M10 7.01614C9.21023 7.02136 8.4543 7.3374 7.89583 7.89587C7.33737 8.45433 7.02133 9.21026 7.01611 10C7.01611 11.6332 8.36682 12.9839 10 12.9839C11.6322 12.9839 12.9839 11.6332 12.9839 10C12.9839 8.36784 11.6322 7.01614 10 7.01614Z" fill="currentColor"/>
                    <path d="M10 3.0376C2.408 3.0376 0.126318 9.61906 0.105431 9.6857L0 10L0.104436 10.3143C0.126318 10.3809 2.408 16.9624 10 16.9624C17.592 16.9624 19.8737 10.3809 19.8946 10.3143L20 10L19.8956 9.6857C19.8737 9.61906 17.592 3.0376 10 3.0376ZM10 14.9731C4.67774 14.9731 2.61587 11.1478 2.11657 10C2.61786 8.84822 4.68072 5.02686 10 5.02686C15.3223 5.02686 17.3841 8.8522 17.8834 10C17.3821 11.1518 15.3193 14.9731 10 14.9731Z" fill="currentColor"/>
                    <path d="M19 2.5L1 18.5" stroke="#D2D0DC" stroke-width="2" stroke-linecap="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_37_3506">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
              </svg>
              ) : (
              <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00001 6.31451C8.28922 6.31921 7.60888 6.60365 7.10626 7.10626C6.60365 7.60888 6.31921 8.28922 6.31451 9.00001C6.31451 10.4699 7.53015 11.6855 9.00001 11.6855C10.469 11.6855 11.6855 10.4699 11.6855 9.00001C11.6855 7.53104 10.469 6.31451 9.00001 6.31451Z" fill="currentColor"/>
                    <path d="M9 2.73383C2.1672 2.73383 0.113686 8.65714 0.0948877 8.71712L0 8.99999L0.0939926 9.28286C0.113686 9.34284 2.1672 15.2662 9 15.2662C15.8328 15.2662 17.8863 9.34284 17.9051 9.28286L18 8.99999L17.906 8.71712C17.8863 8.65714 15.8328 2.73383 9 2.73383ZM9 13.4758C4.20997 13.4758 2.35429 10.033 1.90491 8.99999C2.35608 7.96339 4.21265 4.52416 9 4.52416C13.79 4.52416 15.6457 7.96697 16.0951 8.99999C15.6439 10.0366 13.7873 13.4758 9 13.4758Z" fill="currentColor"/>
              </svg>
              )}
            </button>
          </div>
        </div>

            <button
              type="submit"
              className="btn btn--bright header__submit-btn"
              disabled={isLoginInvalid || isPasswordInvalid}
            >
              {
                isLoading ? (<Loader />) : <h4 style={{color: 'white'}}>Войти</h4>
              }
            </button>

          </form>

          {
        errorMessage !== `` && (
          <Error
            error={errorMessage || ``}
            className="header__error"
          />
            )
          }


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