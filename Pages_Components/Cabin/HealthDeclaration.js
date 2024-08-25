import styles from "./css/health-declaration.module.css";
import CustomRadioButtons, { TermsCheckbox } from "./CustomRadio";
import CustomDatePicker from "./CustomSelectDate";
import CustomSelect from "./CustomSelectPlace";

export const questions = [
  "Have you recently developed cough (dry or productive)?",
  "Fever (or feeling feverish)?",
  "General weakness?",
  "Generalized muscle ache?",
  "Sudden loss of smell and/or taste?",
  "Any respiratory distress?",
  "In the last 14 days before your journey, were you in contact with anyone diagnosed with COVID-19 infection?",
  "In the last four hours before the temperature check, have you consumed antipyretics or other analgesics?",
  "In the last 14 days before your journey, list the cities and countries you have visited and indicate the duration of your stay in each one.",
  "I/we am/are not residing in any containment zone.",
  "I/we are not under quarantine.",
  "If I/we develop any of the above-mentioned symptoms, I shall contact the concerned health authorities immediately.",
  "I/we have not tested COVID-19 positive in the last two months.",
  "I/we are eligible to travel as per the extant norms.",
  "I/we make my mobile number/contact details available to the cruise lines whenever required by them.",
  "I/we undertake to adhere to the health protocol prescribed by the destination State/UT.",
  "Assessment Section",
];

export const options = [
  { label: 'Mumbai', value: 'mumbai' },
  { label: 'Delhi', value: 'delhi' },
  { label: 'Bangalore', value: 'bangalore' },
  { label: 'Hyderabad', value: 'hyderabad' },
  { label: 'Chennai', value: 'chennai' },
  { label: 'Kolkata', value: 'kolkata' },
  { label: 'Pune', value: 'pune' },
  { label: 'Ahmedabad', value: 'ahmedabad' },
  { label: 'Jaipur', value: 'jaipur' },
  { label: 'Surat', value: 'surat' },
  { label: 'Chandigarh', value: 'chandigarh' },
  { label: 'Lucknow', value: 'lucknow' },
  { label: 'Kanpur', value: 'kanpur' },
  { label: 'Nagpur', value: 'nagpur' },
  { label: 'Indore', value: 'indore' },
  { label: 'Coimbatore', value: 'coimbatore' },
  { label: 'Visakhapatnam', value: 'visakhapatnam' },
  { label: 'Vadodara', value: 'vadodara' },
  { label: 'Bhopal', value: 'bhopal' },
  { label: 'Kochi', value: 'kochi' },
  { label: 'Patna', value: 'patna' },
  { label: 'Agra', value: 'agra' },
  { label: 'Nashik', value: 'nashik' },
  { label: 'Ghaziabad', value: 'ghaziabad' },
  { label: 'Aurangabad', value: 'aurangabad' },
];

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
        <>
        <div className={styles.question} key={index}>
          <span className="flex gap-4"><p>{index+1}.</p><p>{question}</p></span>
          <div className={styles.options}>
            <CustomRadioButtons/>
          </div>
        </div>
        
        {index == 8 && <MiddleField/>}
        </>
      ))}
    </div>
  );
};



export const MiddleField = ()=>{
  const handleSelectChange = (value) => {
    console.log('Selected value:', value);
  };
  return (
    <div className={styles.middleField}>
      <CustomSelect options={options} defaultValue="" onChange={handleSelectChange}/>
      <CustomDatePicker defaultValue="" label="Arrival Date" onChange={handleSelectChange}/>
      <CustomDatePicker defaultValue="" label="Departure Date" onChange={handleSelectChange}/>
    </div>
  )
}

