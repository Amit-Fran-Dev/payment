import styles from "./css/health-declaration.module.css";
import CustomRadioButtons, { TermsCheckbox } from "./CustomRadio";

const HealthDeclaration = () => {
  return (
    <div className="container-lg">
      <HeadingForm title="Health Declaration Form" />
      <p className={styles.formDesc}>
        In the last 8 days before your jurney, have you had any of the symptoms?
        (Please Mark Yes or no against each symptom)
      </p>
      <form className={styles.form}>
        <HealthQuestions />
        <div className={styles.termsConditions}>
          <TermsCheckbox/>
          <label>I Accept The Terms And Conditions</label>
        </div>
        <span className={styles.center}>
          <button className={styles.submit}>Generate Boarding Pass</button>
        </span>
      </form>
    </div>
  );
};

export default HealthDeclaration;

export const HeadingForm = ({ title }) => {
  return <h4 className={styles.headingForm}>{title}</h4>;
};

export const HealthQuestions = () => {
  return (
    <div className={styles.container}>
      {questions.map((question, index) => (
        <div className={styles.question} key={index}>
          <p>{question}</p>
          <div className={styles.options}>
            {/* <label>
              <input type="radio" data="yes" name={`question-${index}`} /> YES
            </label>
            <label>
              <input
                type="radio"
                color="red"
                data="no"
                name={`question-${index}`}
              />{" "}
              NO
            </label> */}
            <CustomRadioButtons/>
          </div>
          {index == 8 ? <p>hello there </p> : null}
        </div>
      ))}
    </div>
  );
};

export const questions = [
  "1. Have you recently developed cough (dry or productive)?",
  "2. Fever (or feeling feverish)?",
  "3. General weakness?",
  "4. Generalized muscle ache?",
  "5. Sudden loss of smell and/or taste?",
  "6. Any respiratory distress?",
  "7. In the last 14 days before your journey, were you in contact with anyone diagnosed with COVID-19 infection?",
  "8. In the last four hours before the temperature check, have you consumed antipyretics or other analgesics?",
  "9. In the last 14 days before your journey, list the cities and countries you have visited and indicate the duration of your stay in each one.",
  "10. I/we am/are not residing in any containment zone.",
  "11. I/we are not under quarantine.",
  "12. If I/we develop any of the above-mentioned symptoms, I shall contact the concerned health authorities immediately.",
  "13. I/we have not tested COVID-19 positive in the last two months.",
  "14. I/we are eligible to travel as per the extant norms.",
  "15. I/we make my mobile number/contact details available to the cruise lines whenever required by them.",
  "16. I/we undertake to adhere to the health protocol prescribed by the destination State/UT.",
  "17. Assessment Section",
];
