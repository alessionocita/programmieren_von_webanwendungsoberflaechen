import styles from "./ContactForm.module.css";

import useValidateContactForm from "../hooks/useValidateContactForm";

function ContactForm(props) {

    // Destructuring-Import aller Refs und der Validierungsmethode
    // aus dem Custom-hook useValidateContactForm.js

  const {
    nameInput,                      // Ref für das Input des Namen
    emailInput,                     // Ref für das Input der eMail
    messageInput,                   // Ref für das Textarea mit dem Message
    newsletterInput,                // Ref für die Newsletter-Checkbox
    termsAndConditionsInput,        // Ref für die Terms and Conditions Checkbox
    responseMessage,                // String mit Success- oder Fehlermeldung nach senden des Formulars
    nameResponseMessage,            // Fehlermeldung-String für den Feld "Name". Leer bei bestandener Validierung.
    emailResponseMessage,           // Fehlermeldung-String für den Feld "email". Leer bei bestandener Validierung.
    messageResponseMessage,         // Fehlermeldung-String für den Feld "Message". Leer bei bestandener Validierung.
    termsAndConditionsMessage,      // Fehlermeldung-String für die Checkbox "Terms and Cnditions". Leer bei bestandener Validierung.
    validateForm,                   // Validierungsmethode
  } = useValidateContactForm();     // Custom Hook


    // Triggert die Validierung on Send
  const onSendValueHandler = (event) => {
    event.preventDefault();
    const isValid = validateForm(); // boolesch. Gibt an, ob die Validierung bestanden wurde.

    // Ausgabe der Form-Werte an der Console. Beim Einbau eines Backend wird dies ersetzt.
    if (isValid) {
      console.info(nameInput.current.value);
      console.info(emailInput.current.value);
      console.info(messageInput.current.value);
      console.info(newsletterInput.current.checked);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div>
          <label htmlFor="name">
            Name *{" "}
            {/* Fehlermeldung wird dargestellt falls anders als leerer String */}
            {nameResponseMessage !== "" && (
              <span className={styles.errorMessage}>{nameResponseMessage}</span>
            )}
          </label>
        </div>
        <input
          type="text"
          id="name"
          name="name"
          ref={nameInput}
          required
        ></input>
        <div>
          <label htmlFor="email">
            email *{" "}
            {/* Fehlermeldung wird dargestellt falls anders als leerer String */}
            {emailResponseMessage !== "" && (
              <span className={styles.errorMessage}>
                {emailResponseMessage}
              </span>
            )}
          </label>
        </div>
        <input
          type="email"
          id="email"
          name="email"
          ref={emailInput}
          required
        ></input>
        <div>
          <label htmlFor="message">
            Message *{" "}
            {/* Fehlermeldung wird dargestellt falls anders als leerer String */}
            {messageResponseMessage !== "" && (
              <span className={styles.errorMessage}>
                {messageResponseMessage}
              </span>
            )}
          </label>
        </div>
        <textarea
          id="message"
          name="message"
          rows={props.viewport > 400 ? "8" : "2"}
          cols="30"
          ref={messageInput}
          required
        ></textarea>

        {/* Hier wird die Success- oder Fehlermeldung des gesamten Formulars dargestellt. */}
        {/* Dabei werden Checkboxes und Buttons ausgeblendet */}
        {responseMessage ? (
          <div className={styles.responseMessage}>{responseMessage}</div>
        ) : (
          <>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                id="termsAndConditions"
                name="termsAndConditions"
                ref={termsAndConditionsInput}
                required
              ></input>

            {/* Fehlermeldung wird dargestellt falls anders als leerer String */}
              {termsAndConditionsMessage !== "" ? (
                <>
                  <span className={styles.errorMessage}>
                    {termsAndConditionsMessage}
                  </span>
                  <br />
                </>
              ) : (
                <label
                  htmlFor="termsAndConditions"
                  className={styles.checkboxLabel}
                >
                  I have read the Terms and Conditions *
                </label>
              )}
            </div>

            {/* Optionale Checkbox */}
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                ref={newsletterInput}
              ></input>
              <label htmlFor="newsletter">
                I would like to subscribe to the ClimateCare Newsletter
              </label>
            </div>

            <div className={styles.buttons}>
              <button type="submit" onClick={onSendValueHandler}>
                SEND
              </button>
              <button type="reset">Reset</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
