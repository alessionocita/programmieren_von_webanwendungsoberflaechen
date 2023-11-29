// Logo-Komponente mit Home-Weiterleitung on Click
// wird in Root.js gerendert

import logo from "../assets/climatecare_logo.png";
import styles from "./Logo.module.css";

import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  const onLogoClickHandler = () => {
    navigate("/");
  };

  return (
    <img
      src={logo}
      alt="climateCare Logo"
      className={styles.logo}
      onClick={onLogoClickHandler}
    />
  );
}

export default Logo;
