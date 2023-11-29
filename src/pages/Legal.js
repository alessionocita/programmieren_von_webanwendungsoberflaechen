// Legal-Seitenkomponente. Benutzt die Komponente AsideNavigation.js

import styles from "./Legal.module.css";

import AsideNavigation from "../components/AsideNavigation";

// Aside Menu Links (weitergegeben an AsideNavigation.js)
const MENULINKS = ["Home", "Contact"];

function Legal(props) {
  return (
    <div className={styles.container}>
      {props.viewport > 820 && <AsideNavigation menuLinks={MENULINKS} />}

      <main className={styles.main}>
        <h1>LEGAL INFORMATION</h1>

        <h2>Company Details</h2>
        <address className={styles.address}>
          ClimateCare Ventures Ltd.
          <br />
          4 White Lane, 1234 Cleanwaters
          <br />
          United Kingdom
          <br />
          <span>Email: </span>
          <a href="mailto:info@climatecare.co.uk">info@climatecare.co.uk</a>
          <br />
          <span>Telephone: </span>
          <a href="tel:+4112345678">+41 12345678</a>
        </address>
        <h2>Electronic Commerce Regulations</h2>
        <p>
          ClimateCare Ventures Ltd. operates as an environmental consultancy
          firm, offering insights, data analytics, and advisory services
          pertaining to climate change mitigation and adaptation.
        </p>
        <h2>Privacy & Data Collection</h2>
        <p>
          In compliance with the General Data Protection Regulation (GDPR),
          ClimateCare Ventures is committed to protecting and respecting your
          privacy. We only collect and process personal data when necessary and
          with your explicit consent. For detailed information about our data
          collection and processing practices, please refer to our{" "}
          <a href="#">Privacy Policy</a>.
        </p>
        <h2>Cookie Usage</h2>
        <p>
          We use cookies on our website to enhance user experience and analyze
          website traffic. By using our website, you consent to the use of
          cookies. More details can be found in our{" "}
          <a href="#">Cookie Policy</a>.
        </p>
        <h2>Disclaimer</h2>
        <p>
          While we strive to ensure the accuracy of the information provided on
          this website, ClimateCare Ventures Ltd. does not guarantee its
          correctness, completeness, or its suitability for any purpose. We
          accept no responsibility for any loss or harm arising from the use of
          information on this website.
        </p>

        <div className={styles.freespace}></div>

      </main>
    </div>
  );
}

export default Legal;
