import React from "react";
import classes from "./Payment.module.css";
import CustomSelect from "@/utils/CustomSelect";

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

  const options = [
    { label: 'State Bank of India', value: 'sbi' },
    { label: 'HDFC Bank', value: 'hdfc' },
    { label: 'ICICI Bank', value: 'icici' },
    { label: 'Punjab National Bank', value: 'pnb' },
    { label: 'Axis Bank', value: 'axis' },
    { label: 'Bank of Baroda', value: 'bob' },
    { label: 'Citibank', value: 'citibank' },
    { label: 'Bank of America', value: 'bofa' },
    { label: 'JPMorgan Chase', value: 'jpmc' },
    { label: 'HSBC', value: 'hsbc' },
    { label: 'Barclays', value: 'barclays' },
    { label: 'Deutsche Bank', value: 'deutsche' },
  ];
  

  const handleSelectChange = (value) => {
    console.log('Selected value:', value);
  };
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
      <CustomSelect 
        options={options} 
        defaultValue="" 
        onChange={handleSelectChange} 
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
