import React, { useState, useRef, useEffect } from 'react';
import styles from './CustomDatePicker.module.css';
import { IconCalendarMonth  } from '@tabler/icons-react'; // Importing a calendar icon

const CustomDatePicker = ({label, defaultValue='', onChange }) => {
  const [selectedDate, setSelectedDate] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const dateRef = useRef(null);

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    onChange(newDate);
  };

  const handleClickOutside = (event) => {
    if (dateRef.current && !dateRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dateRef} className={styles.customDatePicker}>
      <div 
        className={styles.customDatePickerTrigger} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedDate || label}
        <IconCalendarMonth  className={styles.icon} />
      </div>
      {isOpen && (
        <input 
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className={styles.dateInput}
        />
      )}
    </div>
  );
};

export default CustomDatePicker;
