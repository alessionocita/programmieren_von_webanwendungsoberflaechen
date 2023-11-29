// Custom Hook für die Validierung des Emissions-Suchformular

import { useState, useRef } from "react";

function useValidateEmissionsForm() {
  const searchTagRef = useRef("");                           // Ref für das Suchfeld
  const [errorMessage, setErrorMessage] = useState("");      // Fehlermeldung-String

// Validierungsmethode
  const validateForm = () => {

    if (searchTagRef.current.value === "") {
    // Überprüfung ob Suchfeld leer ist
      setErrorMessage("Please input country or company name.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return false;
    } 
    // Überprüfung ob Suchfeld potentiell gefährliche Zeichen enthält
    else if (
      searchTagRef.current.value.match(/([<>/|{}[\*\]\\!"§$%()=?`´+\-#])/)
    ) {
      setErrorMessage("Invalid input. Try again");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return false;
    } 
    // Boolean-Ausgabe der Meldung, dass die Prüfung bestanden ist
    else {
      return true;
    }
  };

// Ausgabe des Suchfeld-Refs, der Fehlermeldung-String und der Validierungsmethode
return {
    searchTagRef,
    errorMessage,
    validateForm,
  };
}

export default useValidateEmissionsForm;
