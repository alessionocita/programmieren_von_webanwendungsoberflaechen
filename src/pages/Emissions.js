// Emission-Seite. Benutzt die AsideNavigation, EmissionsTable und EmissionsForm Komponente

import styles from "./Emissions.module.css";
import AsideNavigation from "../components/AsideNavigation";
import EmissionsTable from "../components/EmissionsTable";
import EmissionsForm from "../components/EmissionsForm";

import { useLoaderData } from "react-router-dom";
import { useState } from "react";

// Aside Menu Links (weitergegeben an AsideNavigation.js)
const MENULINKS = ["Research", "Glossary"];

function Emissions(props) {

    // Lädt die Daten aus den Loader in App.js (aus public/data.json)
    const emissions = useLoaderData();

  // String-Eingabe des Suchfeldes als State
  const [searchTag, setSearchTag] = useState("");

  // Setzt den Suchbegriff. Wird von EmissionsForm.js getriggert und bekommt von dort auch die Parameterdaten
  const onSubmitHandler = (word) => {
    setSearchTag(word);
  };


  return (
    <div className={styles.container}>
      {props.viewport > 820 && <AsideNavigation menuLinks={MENULINKS} />}

      <main className={styles.main}>
        <h1>STRONGEST CO2 EMITTANTS</h1>

        <section>
            {/* Rendert die Emissions-Tabelle und gibt die Emissionsdaten und das Suchwort zu EmissionsTable.js weiter */}
          <EmissionsTable
            emissions={emissions}
            searchTag={searchTag}
            viewport={props.viewport}
          />

            {/* Rendert das Suchformular und gibt die Funktion zum Aktualisieren des Suchbegriffes an EmissionsForm.js weiter */}
          <EmissionsForm
            submit={onSubmitHandler}
            reset={onSubmitHandler}
            viewport={props.viewport}
          />
        </section>
      </main>
    </div>
  );
}

export default Emissions;
