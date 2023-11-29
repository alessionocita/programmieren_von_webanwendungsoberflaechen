import styles from "./EmissionsForm.module.css";

import useValidateEmissionsForm from "../hooks/useValidateEmissionsForm";

// Destructuring-Import aller Refs und der Validierungsmethode
// aus dem Custom-hook useValidateEmissionsForm.js

function EmissionsForm(props) {
  const { 
    searchTagRef,                       // Ref für das Input des Suchwortes
    errorMessage,                       // Fehlermeldung-String. Leer bei bestandener Validierung.
    validateForm                        // Validierungsmethode
    } = useValidateEmissionsForm();     // Custom Hook

  const onSendValueHandler = (event) => {
    event.preventDefault();
    const isValid = validateForm();     // boolesch. Gibt an, ob die Validierung bestanden wurde.
    if (isValid) {
      // Triggert on Form Submit die Funktion submit() aus Emissions.js mit dem Suchwort als Parameter  
      props.submit(searchTagRef.current.value); 
  };
    }

  const onResetValueHandler = (event) => {
    // Triggert on Form Reset die Funktion submit() aus Emissions.js mit einem leeren String als Parameter  
    // Dies setzt die Emissions-Tabelle zurück
    props.submit("");
  };

  return (
    <div className={styles.container}>
      {props.viewport > 400 && (
        <p className={styles.text}>
          You can list the table entries by country or by company.
          <br />
          Type the country or company name in the search field and press „Go“.
          <br />
          Use the „reset button“ to restore the default view.
        </p>
      )}
      <form className={styles.form}>
        <label htmlFor="searchTag">SORT BY...</label>
        <input
          type="text"
          id="searchTag"
          data-testid="searchTag"
          name="searchTag"
          placeholder="input country or company"
          ref={searchTagRef}
        ></input>

        {/* Fehlermeldung wird dargestellt falls anders als leerer String */}
        {/* Dabei werden die Buttons ausgeblendet */}
        {errorMessage === "" && (
          <div className={styles.buttons}>
            <button type="submit" data-testid="go-button" onClick={onSendValueHandler}>
              GO
            </button>
            <button type="reset" onClick={onResetValueHandler}>
              Reset
            </button>
          </div>
        )}
       <div className={styles.errorMessage} data-testid="error-message">{errorMessage}</div>
      </form>
    </div>
  );
}

export default EmissionsForm;
