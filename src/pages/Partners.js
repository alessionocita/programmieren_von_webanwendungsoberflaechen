// Partners-Seitenkomponente. Benutzt die Komponente AsideNavigation.js


import styles from "./Partners.module.css";
import AsideNavigation from "../components/AsideNavigation";

import clearSkyLogo from "../assets/clearsky_areonautics_logo.png";
import earthboundLogo from "../assets/earthbound_construction_logo.png";
import ecodriveLogo from "../assets/ecodrive_motors_logo.png";
import forestguardLogo from "../assets/forestguard_logo.png";
import greentechLogo from "../assets/greentech_innovations_logo.png";
import pureflowLogo from "../assets/pureflow_logo.png";
import solarscapeLogo from "../assets/solarscape_logo.png";
import wavetideLogo from "../assets/wavetide_logo.png";

// Aside Menu Links (weitergegeben an AsideNavigation.js)
const MENULINKS = ["Home"];

function Partners(props) {
  return (
    <div className={styles.container}>
      {props.viewport > 820 && <AsideNavigation menuLinks={MENULINKS} />}
      <main className={styles.main}>
        <h1>Partners</h1>
        <div className={styles.partnersContainer}>
          <div className={styles.partner}>
            <img src={clearSkyLogo} className={styles.logo} />
            <span className={styles.companyName}>Clearsky Areonautics</span>
          </div>
          <div className={styles.partner}>
            <img src={earthboundLogo} className={styles.logo} />
            <span className={styles.companyName}>Earthbound Construction</span>
          </div>
          <div className={styles.partner}>
            <img src={ecodriveLogo} className={styles.logo} />
            <span className={styles.companyName}>Ecodrive Motors</span>
          </div>
          <div className={styles.partner}>
            <img src={forestguardLogo} className={styles.logo} />
            <span className={styles.companyName}>Forestguard</span>
          </div>
          <div className={styles.partner}>
            <img src={greentechLogo} className={styles.logo} />
            <span className={styles.companyName}>Greentech Innovations</span>
          </div>
          <div className={styles.partner}>
            <img src={pureflowLogo} className={styles.logo} />
            <span className={styles.companyName}>Pureflow</span>
          </div>
          <div className={styles.partner}>
            <img src={solarscapeLogo} className={styles.logo} />
            <span className={styles.companyName}>Solarscape</span>
          </div>
          <div className={styles.partner}>
            <img src={wavetideLogo} className={styles.logo} />
            <span className={styles.companyName}>Wavetide</span>
          </div>
          <div className={styles.partner}></div>
          <div className={styles.partner}></div>

          {props.viewport <= 400 && <div className={styles.freespace}></div>}
        </div>
      </main>
    </div>
  );
}

export default Partners;
