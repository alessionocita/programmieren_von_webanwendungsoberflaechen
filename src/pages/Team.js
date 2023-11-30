// Team-Seitenkomponente. Benutzt die Komponente AsideNavigation.js

import styles from "./Team.module.css";
import AsideNavigation from "../components/AsideNavigation";

import ceo from "../assets/laura_chen.png";
import cto from "../assets/james_akintola.png";
import headOfMarketing from "../assets/emily_thompson.png";
import productManager from "../assets/robert_collins.png";
import humanResources from "../assets/sarah_williams.png";
import sustainabilityManager from "../assets/ajrun_patel.png";

// Aside Menu Links (weitergegeben an AsideNavigation.js)
const MENULINKS = ["About"];

function Team(props) {
  return (
    <div className={styles.container}>
      {props.viewport > 820 && <AsideNavigation menuLinks={MENULINKS} />}
      <main className={styles.main}>
        <h1>OUR TEAM</h1>
        <div className={styles.teamContainer}>
          <div className={styles.person}>
            <img src={ceo} alt="Laura Chen" className={styles.portrait} />
            <span className={styles.personName}>Laura Chen</span>
            <span className={styles.role}>Chief Executive Officer</span>
          </div>
          <div className={styles.person}>
            <img src={cto} alt="James Akintola" className={styles.portrait} />
            <span className={styles.personName}>James Akintola</span>
            <span className={styles.role}>Chief Technology Officer</span>
          </div>
          <div className={styles.person}>
            <img src={headOfMarketing} alt="Emily Thompson" className={styles.portrait} />
            <span className={styles.personName}>Emily Thompson</span>
            <span className={styles.role}>Head of Marketing</span>
          </div>
          <div className={styles.person}>
            <img src={productManager} alt="Robert Collins" className={styles.portrait} />
            <span className={styles.personName}>Robert Collins</span>
            <span className={styles.role}>Product Manager</span>
          </div>
          <div className={styles.person}>
            <img src={humanResources} alt="Sarah Williams" className={styles.portrait} />
            <span className={styles.personName}>Sarah Williams</span>
            <span className={styles.role}>Human Resources</span>
          </div>
          <div className={styles.person}>
            <img src={sustainabilityManager} alt="Ajrun Patel" className={styles.portrait} />
            <span className={styles.personName}>Ajrun Patel</span>
            <span className={styles.role}>Sustainability Manager</span>
          </div>

          <div className={styles.person}></div>
          <div className={styles.person}></div>
        </div>
      </main>
    </div>
  );
}

export default Team;
