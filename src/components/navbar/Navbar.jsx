import StyledNavbar from "./navbar.module.scss";
import image from "../../images/img.png";

const Navbar = () => {
  return (
    <div>
      <div className={StyledNavbar.navbar}>
        <div className={StyledNavbar.image}>
          <img src={image} alt="img" width="100px" />
        </div>
        <nav className={StyledNavbar.title}>
          <navlink to="#">HOROSCOPE</navlink>
          <navlink to="#">DAILY</navlink>
          <navlink to="#">TAROT</navlink>
          <navlink to="#">ARTICLE</navlink>
          <navlink to="#">CONTACT</navlink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
