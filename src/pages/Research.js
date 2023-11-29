// Research-Seitenkomponente. Benutzt die Komponente AsideNavigation.js

import styles from "./Research.module.css";

import AsideNavigation from "../components/AsideNavigation";

import image from "../assets/research.png";

// Aside Menu Links (weitergegeben an AsideNavigation.js)
const MENULINKS = ["Emissions"];

function Research(props) {
  return (
    <div className={styles.container}>
      {props.viewport > 820 && <AsideNavigation menuLinks={MENULINKS} />}

      <main className={styles.main}>
        <h1>OUR RESEARCH</h1>
        <img src={image} className={styles.image} />

        <p>
          At ClimateCare, our commitment to combating global warming is rooted
          in rigorous scientific research. Our methods for obtaining data about
          CO2 emittants include:
        </p>
        <ol>
          <li>
            <strong>Satellite Observations: </strong>
            Leveraging satellite technology, we monitor global CO2 emissions in
            real-time. This provides a comprehensive view of emission sources
            and their intensity.
          </li>
          <li>
            <strong>Ground-based Monitoring: </strong>
            Our network of ground stations continuously measures CO2 levels,
            providing granular data that complements our satellite observations.
          </li>
          <li>
            <strong>Oceanic Measurements: </strong>
            Oceans play a crucial role in the carbon cycle. Our marine
            expeditions and buoy systems provide insights into how much CO2 is
            absorbed by our oceans.
          </li>
          <li>
            <strong>Data Analytics: </strong>
            With the help of artificial intelligence and machine learning, we
            analyze vast datasets to predict future emission trends and identify
            areas of concern.
          </li>
          <li>
            <strong>Collaborative Research: </strong>
            We partner with academic institutions, research agencies, and other
            organizations to enrich our data collection methods and share
            valuable insights.
          </li>
        </ol>

        <p>
          By combining these methods, we aim to provide a holistic understanding
          of global CO2 emissions, enabling informed decisions and impactful
          actions.
        </p>

        <div className={styles.freespace}></div>
      </main>
    </div>
  );
}

export default Research;
