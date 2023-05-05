import { Link } from "react-router-dom"
import logo from '../../assets/images/logo_main.png';

function Header() {
  return (
   <div className="header">
    <div className="container">
       <Link to="/">
          <div className="header__logo">
            <img src={logo} alt="company logo" draggable={false} />
          </div>
        </Link>

        <div className="header__login">
          <span className="button button--login">
            <p>Войти</p>
          </span>
        </div>
    </div>
   </div>
  )
}

export default Header