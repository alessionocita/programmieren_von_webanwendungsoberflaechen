// Footer-Navigation Komponente. Wird in Root.js gerendert.

import styles from "./FooteNavigation.module.css";
import { NavLink } from "react-router-dom";

function FooterNavigation() {
  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? styles.active : "")}
            end
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/legal"
            className={({ isActive }) => (isActive ? styles.active : "")}
            end
          >
            Legal
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNavigation;
