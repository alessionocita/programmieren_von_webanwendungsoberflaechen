// Custom Hook für die Validierung des Kontaktformulars

import { useState, useRef } from "react";

function useValidateContactForm() {
  const nameInput = useRef("");                     // Ref für das Namenfeld    
  const emailInput = useRef("");                    // Ref für das Email-feld    
  const messageInput = useRef("");                  // Ref für das Message-Feld    
  const newsletterInput = useRef("");               // Ref für die Newsletter-Checkbox    
  const termsAndConditionsInput = useRef("");       // Ref für die Terms and Conditions Checkbox

  const [responseMessage, setResponseMessage] = useState("");                       // Success- oder Fail-Meldung für das gesamte Formular    
  const [nameResponseMessage, setNameResponseMessage] = useState("");               // Fehlermeldungsvariable für das Namenfeld
  const [emailResponseMessage, setEmailResponseMessage] = useState("");             // Fehlermeldungsvariable für das Email-Feld
  const [messageResponseMessage, setMessageResponseMessage] = useState("");         // Fehlermeldungsvaroaböe für das Message-Feld
  const [termsAndConditionsMessage, setTermsAndConditionsMessage] = useState("");   // Fehlermeldungsvariable für die Terms and Conditions Checkbox

  // Validierungsmethode
  const validateForm = () => {
    
    // Überprüfung ob Namenfeld leer ist
    if (nameInput.current.value === "") {
      setNameResponseMessage("This field is required");
      setTimeout(() => {
        setNameResponseMessage("");
      }, 3000);
      return false;
    } 
    // Überprüfung ob Namenfeld potentiell gefährliche Zeichen enthält
        else if (
      nameInput.current.value.match(/([<>/|{}[\*\]\\!"§$%()=?`´+\-#])/)
    ) {
      setNameResponseMessage("Unallowed characters. Try again");
      setTimeout(() => {
        setNameResponseMessage("");
      }, 3000);
      return false;
    } 
    // Überprüfung ob Email-Feld leer ist
    else if (emailInput.current.value === "") {
      setEmailResponseMessage("This field is required");
      setTimeout(() => {
        setEmailResponseMessage("");
      }, 3000);
      return false;
    } 
    // Überprüfung ob Email-Feld potentiell gefährliche Zeichen enthält
    else if (
      emailInput.current.value.match(/([<>/|{}[\*\]\\!"§$%()=?`´+\-#])/)
    ) {
      setEmailResponseMessage("Unallowed characters. Try again");
      setTimeout(() => {
        setEmailResponseMessage("");
      }, 3000);
      return false;
    } 
    // Überprüfung ob Message-Feld leer ist
    else if (messageInput.current.value === "") {
      setMessageResponseMessage("This field is required");
      setTimeout(() => {
        setMessageResponseMessage("");
      }, 3000);
      return false;
    } 
    // Überprüfung ob Message-Feld potentiell gefährliche Zeichen enthält
    else if (
      messageInput.current.value.match(/([<>/|{}[\*\]\\!"§$%()=?`´+\-#])/)
    ) {
      setMessageResponseMessage("Unallowed characters. Try again");
      setTimeout(() => {
        setMessageResponseMessage("");
      }, 3000);
      return false;
    } 
    // Überprüfung, ob die Terms and Conditions angenommen worden sind
    else if (!termsAndConditionsInput.current.checked) {
      setTermsAndConditionsMessage("Please accept our terms and conditions");
      setTimeout(() => {
        setTermsAndConditionsMessage("");
      }, 3000);
    } 
    // Hier wird die Success-Meldung ausgegeben, falls alle Überprüfungen bestanden wurden
    else {
      setResponseMessage("Your message has been sent!");
      setTimeout(() => {
        setResponseMessage("");
      }, 5000);
      return true;
    }
  };

  // Ausgabe aller Refs, Fehlermeldung-Strings und der Validierungsmethode
  return {
    nameInput,
    emailInput,
    messageInput,
    newsletterInput,
    termsAndConditionsInput,
    responseMessage,
    nameResponseMessage,
    emailResponseMessage,
    messageResponseMessage,
    termsAndConditionsMessage,
    validateForm,
  };
}

export default useValidateContactForm;
