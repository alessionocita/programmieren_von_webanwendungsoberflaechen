// Main Navigation Komponente. Wird in Root.js gerendert.
// Wird bei Mobile Devices durch das Burger Menu ersetzt.

import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <nav className={styles.container}>
      <ul className={styles.menu}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
            end
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/emissions"
            className={({ isActive }) => (isActive ? styles.active : "")}
            end
          >
            Emissions
          </NavLink>
        </li>
        <li>
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
  );
}

export default MainNavigation;
