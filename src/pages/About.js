// About-Seite. Verwendet die AsideNavigation-Komponente.

import styles from "./About.module.css";
import AsideNavigation from "../components/AsideNavigation";

import image from "../assets/climateCare_glacier.png";

//Aside Menu Links (weitergegeben an AsideNavigation.js)
const MENULINKS = ["Our Team", "Testimonials"];

function About(props) {
  return (
    <div className={styles.container}>
      {props.viewport > 820 && <AsideNavigation menuLinks={MENULINKS} />}

      <main className={styles.main}>
        <h1>ABOUT US</h1>
        <img src={image} alt="Melting Glacier" className={styles.image} />

        <h2>Who we are</h2>
        <p>
          At ClimateCare, we're more than just a company – we're a movement.
          Founded in 2020, we embarked on a mission to combat the pressing
          challenges of climate change. With a team of passionate
          environmentalists, scientists, and innovators, we're dedicated to
          creating a sustainable future for all.
        </p>
        <h2>Our vision</h2>
        <p>
          A world where every individual, community, and business thrives in
          harmony with nature. We envision a planet where the balance of
          ecosystems is maintained, and the beauty of our natural world is
          preserved for generations to come.
        </p>
        <h2>Our mission</h2>
        <p>
          To provide cutting-edge solutions that reduce carbon footprints, raise
          awareness about the importance of environmental conservation, and
          drive impactful actions. Through our initiatives, we aim to inspire
          change, foster community engagement, and make a tangible difference in
          the fight against climate change.
        </p>
        <p>
          <h2>Join our journey</h2>
          We believe that together, we can create a ripple effect of positive
          change. By partnering with global leaders, local communities, and
          individuals like you, we're building a brighter, greener future. Join
          us in our journey towards sustainability and let's make our planet a
          better place for all.
        </p>

        <div className={styles.freespace}></div>
      </main>
    </div>
  );
}

export default About;
