import styles from "./FaqQuestion.module.css";
import arrow from "../assets/arrow.png";

import { useState } from "react";

function FaqQuestion(props) {
    // boolean. Signalisiert, ob die Antwort einer FAQ sichtbar ist oder nicht.
  const [questionVisible, setQuestionVisible] = useState(false);

  // schaltet on Click auf die Frage die jeweilige Antwort von versteckt auf sichtbar und umgekehrt um
  const onQuestionClickHandler = () => {
    console.log("click");
    setQuestionVisible(!questionVisible);
  };

  return (
    <>
      <div
        className={styles.questionContainer}
        onClick={onQuestionClickHandler}
      >
        <img
          src={arrow}
          alt = ""
          className={
            !questionVisible ? styles.arrowVisible : styles.arrowHidden
          }
        />
        <h3 className={styles.question}>{props.question}</h3>
      </div>

      <div
        className={questionVisible ? styles.answerVisible : styles.answerHidden}
      >
        <p>{props.answer}</p>
      </div>
      <hr />
    </>
  );
}

export default FaqQuestion;
