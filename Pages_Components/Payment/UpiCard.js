import React from "react";
import classes from "./Payment.module.css";
import { Upi } from "./svgs/card";

const UpiCard = () => {
  const paymentOptions = [
    { src: "/assets/icons/svgs/Google_Pay-Logo.wine.svg", alt: "Google Pay" },
    { src: "/assets/icons/svgs/bhim.svg", alt: "BHIM" },
    { src: "/assets/icons/svgs/PhonePe-Logo.wine.svg", alt: "PhonePe" },
    { src: "/assets/icons/svgs/Paytm-Logo.wine.svg", alt: "PayTm" },
  ];

  return (
    <div className={classes.paymentCards}>
      <h3 className={classes.upiHeading}>Pay using UPI</h3>
      <div className={classes.MethodBtn}>
        {paymentOptions.map((option, index) => (
          <button key={index} className={classes.mBtn}>
            <img src={option.src} alt={option.alt} height={35} width="auto" />
          </button>
        ))}
      </div>
      <input
        className={classes.upiEnter}
        type="text"
        placeholder="Enter UPI ID"
      />
      <div className={classes.upiDesc}>
        <div className={classes.wrapperDesc}>
          <span>1</span>
          <p>Enter your UPI ID and click on Pay Now.</p>
        </div>
        <div className={classes.wrapperDesc}>
          <span>2</span>
          <p>You will receive a request from Payment Getway in your UPI App.</p>
        </div>
        <div className={classes.wrapperDesc}>
          <span>3</span>
          <p>You will receive a request from Payment Getway in your UPI App.</p>
        </div>
      </div>
      <div className={classes.secureMsg}>
        <img width="35" height="35" src="/assets/icons/security-secure.png" />
        <p>Safe & Secure Payment</p>
      </div>
      <button className={classes.submit}>Process To Payment</button>
    </div>
  );
};

export default UpiCard;
