// Contact-Seite. Benutzt die AsideNavigation Komponente

import styles from "./Glossary.module.css";

import AsideNavigation from "../components/AsideNavigation";

// Aside Menu Links (weitergegeben an AsideNavigation.js)
const MENULINKS = ["Emissions"];

function Glossary(props) {
  return (
    <div className={styles.container}>
      {props.viewport > 820 && <AsideNavigation menuLinks={MENULINKS} />}

      <main className={styles.main}>
        <h1>GLOSSARY</h1>

        <h2>Carbon Cycle</h2>
        <p>
          The process by which carbon compounds are interconverted in the
          environment, chiefly involving the incorporation of carbon dioxide
          into living tissue by photosynthesis and its return to the atmosphere
          through respiration.
        </p>
        <h2>Greenhouse Gases (GHGs)</h2>
        <p>
          Gases in Earth's atmosphere that trap heat. They let sunlight in but
          prevent some of the heat that the sunlight brings from leaving the
          atmosphere. The main GHGs are water vapor, carbon dioxide, methane,
          nitrous oxide, and ozone.
        </p>
        <h2>Carbon Footprint</h2>
        <p>
          The total amount of greenhouse gases produced to, directly and
          indirectly, support human activities, usually expressed in equivalent
          tons of CO2.
        </p>
        <h2>Carbon Cycle</h2>
        <p>
          The process by which carbon compounds are interconverted in the
          environment, chiefly involving the incorporation of carbon dioxide
          into living tissue by photosynthesis and its return to the atmosphere
          through respiration.
        </p>
        <h2>Radiative Forcing</h2>
        <p>
          The difference between sunlight absorbed by the Earth and the energy
          radiated back to space. Positive radiative forcing tends to warm the
          surface of the Earth, and negative radiative forcing tends to cool it.
        </p>
        <h2>Carbon Sequestration</h2>
        <p>
          The process of capturing and storing atmospheric carbon dioxide to
          mitigate global warming and climate change.
        </p>
        <h2>Emission Factor</h2>
        <p>
          A representative value that attempts to relate the quantity of a
          pollutant released to the atmosphere with an activity associated with
          the release of that pollutant.
        </p>

        <div className={styles.freespace}></div>
      </main>
    </div>
  );
}

export default Glossary;
