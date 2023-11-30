// Menu mit Links auf Social Media. Wird in Root.js gerendert.

import styles from "./SocialNavigation.module.css";

import xLogo from "../assets/x-logo-white.svg";
import facebookLogo from "../assets/facebook_logo_secondary.svg";
import instagramLogo from "../assets/instagram_glyph_white.svg";

function SocialNavigation() {
  return (
    <div className={styles.container}>
      <img src={facebookLogo} alt="Facebook Logo" className={styles.logo} />
      <img src={instagramLogo} alt="Instagram Logo" className={styles.logo} />
      <img src={xLogo} alt="X Logo" className={styles.logo} />
    </div>
  );
}

export default SocialNavigation;
