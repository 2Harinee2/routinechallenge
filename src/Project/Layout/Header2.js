import './Header2.css';
import logo from '../image/logo/logo.png';

const Header2 = () => {
  
  return (
    <div>
      <header>
        <div className="header">
          <nav className="nav">
            <ul className='nav-left'>
              <li className='l03'><a href="#about">ABOUT</a></li>
              <li className='l03'><a href="/challenge">CHALLENGE</a></li>
            </ul>
            <ul className='nav-center'>
              <li className="logo"><a href="/"><img src={logo} alt="logo" /></a></li>
            </ul>
            <ul className='nav-right'>
              <li className='l03'><a href="/myPage">MY PAGE</a></li>
              <li className='l03'><a href="/login">LOGIN</a></li>
              <li className='l03'><a href="/join">JOIN</a></li>
            </ul>
          </nav>        
        </div>
      </header>
    </div>
  );
};

export default Header2;