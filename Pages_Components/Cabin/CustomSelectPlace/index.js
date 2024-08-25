import React, { useState, useRef, useEffect } from 'react';
import styles from './CustomSelect.module.css';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

const CustomSelect = ({ options, defaultValue, onChange }) => {
  const placeholder = { label: 'Place', value: '' };
  const [selected, setSelected] = useState(() => {
    const defaultOption = options.find(option => option.value === defaultValue) || null;
    return defaultOption ? { label: defaultOption.label, value: defaultOption.value } : placeholder;
  });
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSelect = (option) => {
    if (option.value === '') {
      return;
    }
    setSelected(option);
    onChange(option.value);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
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
    <div ref={selectRef} className={styles.customSelect}>
      <div 
        className={styles.customSelectTrigger} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected.label}
        {isOpen ? (
          <IconChevronUp className={styles.icon} />
        ) : (
          <IconChevronDown className={styles.icon} />
        )}
      </div>
      {isOpen && (
        <div className={`${styles.customOptions} scrollBarMercury`}>
          <div 
            key={placeholder.value} 
            className={`${styles.customOption} ${selected.value === placeholder.value ? styles.active : ''}`}
            onClick={() => handleSelect(placeholder)}
          >
            {placeholder.label}
          </div>
          {options.map((option) => (
            <div 
              key={option.value} 
              className={`${styles.customOption} ${option.value === selected.value ? styles.active : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
