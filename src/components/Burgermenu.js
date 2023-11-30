// Diese Komponente ist die Burger Menu Icon und die Schrift "MENU"
// Sie aktiviert on Click das Menu Slider im Mobile Mode
// Die Komponente wird in Desktop Mode nicht dargestellt

import styles from "./Burgermenu.module.css";

import icon from "../assets/burgermenu.svg";

function Burgermenu(props) {

//    Das triggert die Funktion onBurgerMenuActivateHandler aus Root.js

  const onActivateHandler = () => {
    props.onBurgerMenuActivateHandler();
  };

  return (
    <figure className={styles.container} onClick={onActivateHandler}>
      <img src={icon} alt="burgermenu icon" className={styles.icon} />
      <figcaption className={styles.caption}>MENU</figcaption>
    </figure>
  );
}

export default Burgermenu;
