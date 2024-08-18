import React, { useState } from "react";
import classes from "./Payment.module.css";
import { IconCalendarMonth, IconCreditCardPay } from "@tabler/icons-react";

const DebitCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const paymentOptions = [
    { src: "/assets/icons/svgs/Mastercard-Logo.wine.svg", alt: "Master Card" },
    { src: "/assets/icons/svgs/American_Express-Logo.wine.svg", alt: "American Express" },
    { src: "/assets/icons/svgs/diners2.svg", alt: "Diners" },
    { src: "/assets/icons/svgs/Visa_Inc.-Logo.wine.svg", alt: "Visa" },
    { src: "/assets/icons/svgs/rupay.svg", alt: "Rupay" },
  ];

  const handleCardNumberChange = (event) => {
    const { value } = event.target;
    const cleaned = value.replace(/\D/g, '');
    const formatted = cleaned.replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(formatted);
  };

  const handleExpiryDateChange = (event) => {
    const { value } = event.target;
    const cleaned = value.replace(/\D/g, '');
    const formatted = cleaned.replace(/(\d{2})(\d{0,2})/, '$1/$2').trim();
    setExpiryDate(formatted);
  };

  const handleCvvChange = (event) => {
    const { value } = event.target;
    const cleaned = value.replace(/\D/g, '');
    setCvv(cleaned); // CVV is usually 3 digits
  };

  return (
    <div className={classes.paymentCards} id="2">
      <h3 className={classes.upiHeading}>Enter Your Card Details</h3>
      <div className={classes.MethodBtn}>
        {paymentOptions.map((option, index) => (
          <button key={index} className={classes.mBtnDebit}>
            <img src={option.src} alt={option.alt} height={35} width="auto" />
          </button>
        ))}
      </div>
      <div className={classes.debitMsgBox}>
        <span>!</span>
        <p className={classes.msgDebit}>
          Please ensure your card is enabled for online transaction.
        </p>
        <a href="#">know more</a>
      </div>
      <input
        className={classes.upiEnter}
        type="text"
        value={cardNumber}
        onChange={handleCardNumberChange}
        placeholder="Card Number"
        maxLength="19"
      />
      <span className={classes.cardInputs}>
        <span className={classes.dateBox}>
          <input
            className={classes.upiEnter}
            type="text"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            placeholder="Expiry Date"
            maxLength="5"
          />
          <span className={classes.date}>
            <IconCalendarMonth className={classes.dateIcon} stroke={2} />
          </span>
        </span>
        <span className={classes.dateBox}>
          <input
            className={classes.upiEnter}
            type="text"
            value={cvv}
            onChange={handleCvvChange}
            placeholder="CVV"
            maxLength="3"
          />
          <span className={classes.date}>
            <IconCreditCardPay className={classes.dateIcon} stroke={2} />
          </span>
        </span>
      </span>
      <input
        className={classes.upiEnter}
        type="text"
        placeholder="Card Holder Name"
      />
      <div className={classes.secureMsg}>
        <img width="35" height="35" src="/assets/icons/security-secure.png" />
        <p>Safe & Secure Payment</p>
      </div>
      <button className={classes.submit}>Process To Payment</button>
    </div>
  );
};

export default DebitCard;
