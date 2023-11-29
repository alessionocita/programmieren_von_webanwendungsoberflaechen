import styles from "./Contact.module.css";

import AsideNavigation from "../components/AsideNavigation";
import ContactForm from "../components/ContactForm";

const MENULINKS = ["Home", "Legal"];

function Contact(props) {
  return (
    <div className={styles.container}>
      {props.viewport > 820 && <AsideNavigation menuLinks={MENULINKS} />}

      <main className={styles.main}>
        <h1 className={styles.title}>Contact us</h1>

        <ContactForm viewport={props.viewport} />
      </main>
    </div>
  );
}

export default Contact;
