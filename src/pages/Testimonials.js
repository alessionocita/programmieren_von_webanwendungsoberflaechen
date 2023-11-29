// Testimonials-Seitenkomponente. Benutzt die Komponente AsideNavigation.js

import styles from "./Testimonials.module.css";

import AsideNavigation from "../components/AsideNavigation";

import testimonial1 from "../assets/testimonials_jane_mitchell.png";
import testimonial2 from "../assets/testimonials_richard_forster.png";
import testimonial3 from "../assets/testimonials_aisha_fernandez.png";
import testimonial4 from "../assets/testimonial_samuel_harris.png";

// Aside Menu Links (weitergegeben an AsideNavigation.js)
const MENULINKS = ["About"];

function Testimonials(props) {
  return (
    <div className={styles.container}>
      {props.viewport > 820 && <AsideNavigation menuLinks={MENULINKS} />}

      <main className={styles.main}>
        <h1>TESTIMONIALS</h1>
        <div className={styles.testimonial}>
          <img src={testimonial1} className={styles.image} />
          <div className={styles.textBox}>
            <h3>Jane Mitchell</h3>
            <h4>Environmental Project Manager, Green Earth Initiatives</h4>
            <blockquote className={styles.quote}>
              I've been collaborating with ClimateCare for over a year, and
              their dedication to research and data-driven solutions is
              unparalleled. Their efforts in monitoring global CO2 emissions
              have provided invaluable insights to our community projects.
            </blockquote>
          </div>
        </div>

        <div className={styles.testimonial}>
          <img src={testimonial2} className={styles.image} />
          <div className={styles.textBox}>
            <h3>Richard Forster</h3>
            <h4>Professor of Environmental Science, Stanford University</h4>
            <blockquote className={styles.quote}>
              As a professor of environmental science, I've been impressed with
              the rigorous methodologies and groundbreaking research conducted
              by ClimateCare. Their commitment to combating global warming is
              truly commendable.
            </blockquote>
          </div>
        </div>

        <div className={styles.testimonial}>
          <img src={testimonial3} className={styles.image} />
          <div className={styles.textBox}>
            <h3>Aisha Fernandez</h3>
            <h4>Director of Sustainability, Urban Planning Association</h4>
            <blockquote className={styles.quote}>
              Partnering with ClimateCare has been a game-changer for our
              organization. Their holistic understanding of global CO2 emissions
              and predictive analytics have enabled us to make informed
              decisions that have a real impact.
            </blockquote>
          </div>
        </div>

        <div className={styles.testimonial}>
          <img src={testimonial4} className={styles.image} />
          <div className={styles.textBox}>
            <h3>Samuel Harris</h3>
            <h4>Environmental Policy Advisor, United Nations</h4>
            <blockquote className={styles.quote}>
              The team at ClimateCare is making a difference where it matters
              most. Their advanced research and dedication to the cause have
              inspired many, including myself, to join the fight against global
              warming.
            </blockquote>
          </div>
        </div>

        <div className={styles.freespace}></div>
      </main>
    </div>
  );
}

export default Testimonials;
