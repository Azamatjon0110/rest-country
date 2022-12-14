

import "./header.css"
import Logo from "../../assets/images/icon/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-top">
          <a href="index.html">
            <img className="site-logo" src={Logo} alt="Germany flag" />
          </a>
          <button className="darkmode-btn" type="button">Dark Mode</button>
        </div>
      </div>
    </header>
  );
};

export default Header;