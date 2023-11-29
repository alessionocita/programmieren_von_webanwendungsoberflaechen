import styles from "./EmissionsTable.module.css";

import { useState, useEffect } from "react";

function EmissionsTable(props) {

  // Setzt das Sortierkriterium und die sortierte Daten als Component State
  const [sortBy, setSortBy] = useState("co2");
  const [filteredData, setFilteredData] = useState([]);

  // führt die Sortierung und Filterung aus
  // 1) beim Laden der Komponente
  // 2) wenn das Sortierkriterum sich ändert
  // 3) wenn das Suchwort sich ändert

  useEffect(() => {
    filterAndSortData(props.searchTag, sortBy);
  }, [props.searchTag, sortBy]);


// Sortier- und Filterfunktion
  const filterAndSortData = (searchTag, sortKey) => {
    let newData = props.emissions; // kopiert das Array der Daten in einer neuen Variable

    // Daten werden gefiltert falls Suchwort vorhanden ist
    if (searchTag !== "") {
      newData = newData.filter((item) =>
        [item.country.toLowerCase(), item.company.toLowerCase()].some((value) =>
          String(value).toLowerCase().includes(searchTag.toLowerCase())
        )
      );
    }

    // Daten werden nach Sortierkriterium sortiert
    if (sortKey === "company") {
      newData.sort((a, b) => a.company.localeCompare(b.company));
    } else if (sortKey === "country") {
      newData.sort((a, b) => a.country.localeCompare(b.country));
    } else if (sortKey === "co2"){
      newData.sort((a, b) => b.co2_y - a.co2_y);
    }

    setFilteredData(newData); // Daten werden ins State gespeichert
  };

  // Funktion zum Ändern des Sortierkriteriums on Click
  const onSort = (sortKey) => {
    setSortBy(sortKey);
    filterAndSortData(props.searchTag, sortKey);
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.head}>
          {/* Anclickbare Tabellenköpfe. Ein Click ändert das Sortierkriterium. */}
          <th className={styles.headCell} onClick = {() => onSort("country")}>COUNTRY</th>
          <th className={styles.headCell} onClick = {() => onSort("company")}>COMPANY</th>
          <th className={styles.headCell}onClick = {() => onSort("co2")}>CO2e/year</th>
        </thead>
        {filteredData.length === 0 ? (
          <p>No data matches for your search</p>
        ) : (
          <tbody>

            {/* Alle Objekte aus dem filteredData-Array werden hier in der Tabelle untergebracht */}
            {filteredData.map((entry) => {
              return (
                <tr key={entry.id}>
                  <td className={styles.cell}>{entry.country}</td>
                  <td className={styles.cell}>{entry.company}</td>
                  <td className={styles.cell}>
                    <div style={{ transform: "translateX(24px)" }}>
                      {entry.co2_y}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>

      <div className={styles.freespace}></div>
      
    </div>
  );
}

export default EmissionsTable;
