import React from "react";
import classes from "./Payment.module.css";

const NetCard = () => {
  const paymentOptions = [
    {
      src: "/assets/icons/banksSVG/icici.svg",
      alt: "icici bank",
    },
    {
      src: "/assets/icons/banksSVG/hdfc.svg",
      alt: "hdfc bank",
    },
    {
      src: "/assets/icons/banksSVG/axis.svg",
      alt: "axis bank",
    },
    {
      src: "/assets/icons/banksSVG/sbi.svg",
      alt: "sbi",
    },
    {
      src: "/assets/icons/banksSVG/badoda.svg",
      alt: "bank of badoda",
    },
  ];

  return (
    <div className={classes.paymentCards}>
      <h3 className={classes.upiHeading}>Select Your Bank</h3>
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
        placeholder="Enter Bank Name"
      />
      <div className={classes.secureMsg}>
        <img width="35" height="35" src="/assets/icons/security-secure.png" />
        <p>Safe & Secure Payment</p>
      </div>
      <button className={classes.submit}>Process To Payment</button>
    </div>
  );
};

export default NetCard;
