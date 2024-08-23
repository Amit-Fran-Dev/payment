import React, { useState } from 'react';
import styles from './radio.module.css'; 

const CustomRadioButtons = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={styles.radioGroup}>
      <label className={styles.radioOption}>
        <input
          type="radio"
          name="option"
          value="yes"
          checked={selectedValue === 'yes'}
          onChange={handleChange}
          className={styles.hiddenInput}
        />
        <span className={`${styles.customRadio} ${selectedValue === 'yes' ? styles.selected : ''}`}></span>
        Yes
      </label>
      <label className={styles.radioOption}>
        <input
          type="radio"
          name="option"
          value="no"
          checked={selectedValue === 'no'}
          onChange={handleChange}
          className={styles.hiddenInput}
        />
        <span className={`${styles.customRadio} ${selectedValue === 'no' ? styles.selected : ''}`}></span>
        No
      </label>
    </div>
  );
};

export default CustomRadioButtons;
