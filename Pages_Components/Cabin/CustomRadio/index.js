// YesNoInputs.js
import React, { useState } from "react";
import styles from "./radio.module.css";
import { IconX, IconCheck } from "@tabler/icons-react";

export const YesInput = ({ selectedValue, handleChange }) =>{
  return (
    <label className={styles.radioOption}>
    <input
      type="radio"
      name="option"
      value="yes"
      checked={selectedValue === "yes"}
      onChange={handleChange}
      className={styles.hiddenInput}
    />
    <span
      className={`${styles.customRadio} ${
        selectedValue === "yes" && styles.selectedYES
      }`}
    >
      {selectedValue === "yes" && (
        <IconCheck className={styles.selectedYESspan} stroke={2.5} />
      )}
    </span>
    YES
  </label>
  )
};

export const NoInput = ({ selectedValue, handleChange }) => {
  return (
    <label className={styles.radioOption}>
    <input
      type="radio"
      name="option"
      value="no"
      checked={selectedValue === "no"}
      onChange={handleChange}
      className={styles.hiddenInput}
    />
    <span
      className={`${styles.customRadio} ${
        selectedValue === "no" && styles.selectedNO
      }`}
    >
      {selectedValue === "no" && (
        <IconX className={styles.selectedNOspan} stroke={2.5} />
      )}
    </span>
    NO
  </label>
  )
};

export const TermsCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <label className={styles.radioOption}>
    <input
      type="checkbox"
      checked={isChecked}
      name="check"
      id="check"
      onChange={handleCheckboxChange}
      className={styles.hiddenInput}
    />
    <span
      className={`${styles.customRadio} ${
        isChecked && styles.selectedYES
      }`}
    >
      {isChecked && (
        <IconCheck className={styles.selectedYESspan} stroke={2.5} />
      )}
    </span>
  </label>
  );
};

const CustomRadioButtons = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={styles.radioGroup}>
      <YesInput selectedValue={selectedValue} handleChange={handleChange} />
      <NoInput selectedValue={selectedValue} handleChange={handleChange} />
    </div>
  );
};

export default CustomRadioButtons;
