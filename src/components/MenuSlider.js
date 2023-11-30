// Menu Slider-Komponente. Erscheint on Click auf das Burger Menu
// Wird nur bei Mobile devices in Root.js gerendert

import styles from "./MenuSlider.module.css";

import close from "../assets/closeIcon.svg";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

// boolean. Gibt an, ob das Slider versteckt ist
function MenuSlider(props) {
  const [menuIsHidden, setMenuIsHidden] = useState(props.hidden);

// Empfängt von Root.js den versteckt/sichtbar Status des Sliders als boolean
  useEffect(() => {
    setMenuIsHidden(props.hidden);
  }, [props.hidden]);

// Aktiviert on Click auf den Close Icon oder auf ein Menu Link
// die Funktion onCloseIconActivateHandler aus Root.js.
// Diese schaltet den Slider auf versteckt um.
// Der interne Menu Status (menuIsHidden) wird ebenfalls aktualisiert. 
  const onIconActivateHandler = () => {
    props.onCloseIconActivateHandler();
    setMenuIsHidden(props.hidden);
  };

  // Menu mit allen Links, Sublinks und das Close Icon.
  return (
    <div className={menuIsHidden ? styles.sliderHidden : styles.sliderVisible}>
      <img
        src={close}
        alt = "close icon"
        className={styles.closeIcon}
        onClick={onIconActivateHandler}
      />
      <nav>
        <ul className={styles.menuTopLevel}>
          <li onClick={onIconActivateHandler}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
              end
            >
              Home
            </NavLink>
          </li>
          <ul className={styles.menuSecondLevel}>
            <li onClick={onIconActivateHandler}>
              <NavLink
                to="/news"
                className={({ isActive }) => (isActive ? styles.active : "")}
                end
              >
                News
              </NavLink>
            </li>
            <li onClick={onIconActivateHandler}>
              <NavLink
                to="/partners"
                className={({ isActive }) => (isActive ? styles.active : "")}
                end
              >
                Partners
              </NavLink>
            </li>
            <li onClick={onIconActivateHandler}>
              <NavLink
                to="/faq"
                className={({ isActive }) => (isActive ? styles.active : "")}
                end
              >
                FAQ
              </NavLink>
            </li>
          </ul>
          <li onClick={onIconActivateHandler}>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : "")}
              end
            >
              About us
            </NavLink>
          </li>
          <ul className={styles.menuSecondLevel}>
            <li onClick={onIconActivateHandler}>
              <NavLink
                to="/our team"
                className={({ isActive }) => (isActive ? styles.active : "")}
                end
              >
                Our Team
              </NavLink>
            </li>
            <li onClick={onIconActivateHandler}>
              <NavLink
                to="testimonials"
                className={({ isActive }) => (isActive ? styles.active : "")}
                end
              >
                Testimonials
              </NavLink>
            </li>
          </ul>
          <li onClick={onIconActivateHandler}>
            <NavLink
              to="/emissions"
              className={({ isActive }) => (isActive ? styles.active : "")}
              end
            >
              Emissions
            </NavLink>
          </li>
          <ul className={styles.menuSecondLevel}>
            <li onClick={onIconActivateHandler}>
              <NavLink
                to="/research"
                className={({ isActive }) => (isActive ? styles.active : "")}
                end
              >
                Research
              </NavLink>
            </li>
            <li onClick={onIconActivateHandler}>
              <NavLink
                to="/glossary"
                className={({ isActive }) => (isActive ? styles.active : "")}
                end
              >
                Glossary
              </NavLink>
            </li>
          </ul>
          <li onClick={onIconActivateHandler}>
            <NavLink
              to="/solutions"
              className={({ isActive }) => (isActive ? styles.active : "")}
              end
            >
              Solutions
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuSlider;
