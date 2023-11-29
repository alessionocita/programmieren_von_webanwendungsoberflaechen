//Home-Seitenkomponente. Benutzt die Komponente AsideNavigation

import styles from "./Home.module.css";
import AsideNavigation from "../components/AsideNavigation";

import image from "../assets/climateCare_scientists.png";

// Aside Menu Links (weitergegeben an AsideNavigation.js)
const MENULINKS = ["News", "Partners", "FAQ"];

function Home(props) {
  return (
    <div className={styles.container}>
      {props.viewport > 820 && <AsideNavigation menuLinks={MENULINKS} />}

      <main className={styles.main}>
        <h1>CHAMPIONING A GREENER TOMORROW. TODAY.</h1>
        <img src={image} className={styles.image} />

        <p>
          At ClimateCare, we believe in a world where the balance of nature is
          preserved for future generations. As the guardians of our planet, it’s
          our responsibility to take proactive steps against the looming threat
          of climate change. Our mission is to provide innovative solutions,
          raise awareness, and drive impactful actions to combat the adverse
          effects of global warming.
        </p>
        <h2>Why choose us?</h2>
        <p>
          <strong>Expertise: </strong>
          With a team of dedicated environmental scientists and climate experts,
          we bring a wealth of knowledge to the table.
        </p>
        <p>
          <strong>Innovation: </strong>
          Our cutting-edge solutions are designed to address the unique
          challenges posed by climate change.
        </p>
        <p>
          <strong>Community: </strong>
          We foster a community of eco-warriors, united in their passion to make
          a difference.
        </p>

        {(props.viewport < 400 || props.viewport > 820) && (
          <div className={styles.freespace}></div>
        )}
      </main>
    </div>
  );
}

export default Home;
