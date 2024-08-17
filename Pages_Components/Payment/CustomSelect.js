import React from "react";
import classes from "./Payment.module.css";

const CustomSelect = () => {
  return (
    <select className={classes.selectBox}>
      <option>Select Payment Option</option>
      <option value="upi">UPI</option>
      <option value="card">Debit/Credit Card</option>
      <option value="net">Net Banking</option>
    </select>
  );
};

export default CustomSelect;
