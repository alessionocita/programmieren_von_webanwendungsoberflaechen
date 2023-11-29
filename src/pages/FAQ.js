// FAQ-Seitenkomponente. Benutzt die Komponenten AsideNavigation.js und FaqQuestion.js

import styles from "./FAQ.module.css";
import AsideNavigation from "../components/AsideNavigation";
import FaqQuestion from "../components/FaqQuestion";

// Aside Menu Links (weitergegeben an AsideNavigation.js)
const MENULINKS = ["Home"];

// Objektenarray mit allen Fragen und Antworten und eine id pro Eintrag
const QAS = [
  {
    id: 1,
    question: "What is ClimateCare?",
    answer:
      "ClimateCare is an initiative dedicated to combating climate change. We offer a range of solutions and services to assist individuals and businesses in reducing their carbon footprint and adopting sustainable practices.",
  },
  {
    id: 2,
    question: "How does ClimateCare offset carbon emissions?",
    answer:
      "ClimateCare invests in various carbon offset projects, including reforestation, renewable energy initiatives, and community-based programs. These projects are designed to absorb or prevent the equivalent amount of CO2 that our clients aim to offset.",
  },
  {
    id: 3,
    question: "Can businesses partner with ClimateCare?",
    answer:
      "Absolutely! We work closely with businesses of all sizes to develop tailored sustainability strategies. From carbon offsetting to green consultancy, we provide comprehensive solutions to meet corporate sustainability goals.",
  },
  {
    id: 4,
    question: "What steps can I take to reduce my carbon footprint?",
    answer:
      "Beyond offsetting your emissions, ClimateCare provides educational resources and actionable guidelines on sustainable living. This includes energy-saving tips, sustainable travel options, waste reduction methods, and recommendations for eco-friendly products and services. By integrating these practices into your daily life, you can actively contribute to a greener future.",
  },
  {
    id: 5,
    question: "Are ClimateCare's projects verified by third parties?",
    answer:
      "Yes, all of our carbon offset projects undergo rigorous third-party verification to ensure their effectiveness and integrity. We adhere to international standards and best practices to guarantee the authenticity of our carbon credits.",
  },
];

function FAQ(props) {
  return (
    <div className={styles.container}>
      {props.viewport > 820 && <AsideNavigation menuLinks={MENULINKS} />}
      <main className={styles.main}>
        <h1 className={styles.title}>FAQ</h1>
        {QAS.map((qa) => {
        // Rendert die FAQ und gibt dem FaqQuestion-Modul das jeweilige Objekt mit Frage, Antwort und id weiter
          return (
            <FaqQuestion
              key={qa.id}
              question={qa.question}
              answer={qa.answer}
            />
          );
        })}
                <div className={styles.freespace}></div>

      </main>
    </div>
  );
}

export default FAQ;
