// Diese Komponente liefert das sekundäre Navigationsmenu.
// Sie wird in jeder Einzelseite eingebettet.
// Bei Mobile Viewports wird sie nicht dargestellt.

import styles from "./AsideNavigation.module.css";

import menuIcon from "../assets/asideMenuIcon.svg";

import { NavLink } from "react-router-dom";

function AsideNavigation(props) {
  return (
    <nav className={styles.container}>
      <ul className={styles.menu}>
        {/* Das String-Array props.menuLinks wird von jeder der pages-Komponente geliefert.
        Für jeden Eintrag wird dann ein NavLink gerendert. */}
        {props.menuLinks.map((menuLink) => {
          return (
            <li key={menuLink} className={styles.menuItem}>
              <img src={menuIcon} className={styles.menuIcon} />
              {/* Falls der Eintrag "Home" ist, so wird der to-paramenter auf "/" gesetzt.
              Ansonsten wird der Anfang-Buchstabe in lowerCase konvertiert. */}
              <NavLink
                to={menuLink === "Home" ? "/" : `/${menuLink.toLowerCase()}`}
                className={({ isActive }) => (isActive ? styles.active : "")}
                end
              >
                {menuLink}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default AsideNavigation;
