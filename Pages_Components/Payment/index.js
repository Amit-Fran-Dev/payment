// import React, { useState } from "react";
// import classes from "./Payment.module.css";
// import { Bank, Debit, Upi } from "./svgs/card";
// import Plans from "./Plans";
// import { IconCalendarMonth } from "@tabler/icons-react";
// import { IconCreditCardPay } from "@tabler/icons-react";

// const PaymentGetway = () => {
//   return (
//     <div className={`${classes.pageSection} container-xl`}>
//       <h2 className={`${classes.headingMob} visibleFrom-lg`}>
//         Select Payment Method
//       </h2>
//       <div className={classes.sec1}>
//         <h2 className={`${classes.heading} hiddenFrom-lg`}>
//           Select Payment Method
//         </h2>
//         <PaymentMethods />
//       </div>
//       <Plans />
//     </div>
//   );
// };

// export default PaymentGetway;

// const PaymentMethods = () => {
//   const data = [
//     {
//       logo: "LG",
//       name: "UPI Options",
//       description: "Pay Directly From Your Bank Account",
//     },
//     {
//       logo: "DBCB",
//       name: "Debit/Credit Card",
//       description: "Visa, MasterCard, AMEX, Rupay and DinnerClub",
//     },
//     {
//       logo: "NetB",
//       name: "Net Banking",
//       description: "All Measure Banks Available",
//     },
//   ];
//   const [active, setactive] = useState(1);
//   const [switchPay, setswitchPay] = useState("UpiCard");
//   const toggleCard =
//     (switchPay == "UpiCard" && <UpiCard />) ||
//     (switchPay == "DebitCard" && <DebitCard />) ||
//     (switchPay == "NetCard" && <NetCard />);

//   const handleSetSwitchPay = (val, act) => {
//     setswitchPay(val);
//     setactive(act);
//   };
//   return (
//     <div className={classes.paymentBox}>
//       <div className={classes.paymentMethods}>
//         <div
//           onClick={() => handleSetSwitchPay("UpiCard", 1)}
//           className={classes.upi}
//           data={active}
//         >
//           <div className={classes.logo}>
//             <Upi />
//           </div>
//           <div className={classes.methodContainer}>
//             <h3 className={classes.name}>UPI Options</h3>
//             <p className={classes.description}>
//               Pay Directly From Your Bank Account
//             </p>
//           </div>
//         </div>
//         <div
//           onClick={() => handleSetSwitchPay("DebitCard", 2)}
//           className={classes.DbCb}
//           data={active}
//         >
//           <div className={classes.logo}>
//             <Debit />
//           </div>
//           <div className={classes.methodContainer}>
//             <h3 className={classes.name}>Debit/Credit Card</h3>
//             <p className={classes.description}>
//               Visa, MasterCard, AMEX, Rupay and DinnerClub
//             </p>
//           </div>
//         </div>
//         <div
//           onClick={() => handleSetSwitchPay("NetCard", 3)}
//           className={classes.netB}
//           data={active}
//         >
//           <div className={classes.logo}>
//             <Bank />
//           </div>
//           <div className={classes.methodContainer}>
//             <h3 className={classes.name}>NetBanking</h3>
//             <p className={classes.description}>All Measure Banks Available</p>
//           </div>
//         </div>
//       </div>
//       {toggleCard}
//     </div>
//   );
// };

// const UpiCard = () => {
//   const paymentOptions = [
//     {
//       src: "/assets/icons/svgs/Google_Pay-Logo.wine.svg",
//       alt: "Google Pay",
//     },
//     {
//       src: "/assets/icons/svgs/bhim.svg",
//       alt: "BHIM",
//     },
//     {
//       src: "/assets/icons/svgs/PhonePe-Logo.wine.svg",
//       alt: "PhonePe",
//     },
//     {
//       src: "/assets/icons/svgs/Paytm-Logo.wine.svg",
//       alt: "PayTm",
//     },
//   ];
//   return (
//     <div className={classes.paymentCards}>
//       <h3 className={classes.upiHeading}>Pay using UPI</h3>
//       <div className={classes.MethodBtn}>
//         {paymentOptions.map((option, index) => (
//           <button key={index} className={classes.mBtn}>
//             <img src={option.src} alt={option.alt} height={35} width="auto" />
//           </button>
//         ))}
//       </div>
//       <input
//         className={classes.upiEnter}
//         type="text"
//         placeholder="Enter UPI ID"
//       />
//       <div className={classes.upiDesc}>
//         <div className={classes.wrapperDesc}>
//           <span>1</span>
//           <p>Enter your UPI ID and click on Pay Now.</p>
//         </div>
//         <div className={classes.wrapperDesc}>
//           <span>2</span>
//           <p>You will receive a request from Payment Getway in your UPI App.</p>
//         </div>
//         <div className={classes.wrapperDesc}>
//           <span>3</span>
//           <p>You will receive a request from Payment Getway in your UPI App.</p>
//         </div>
//       </div>
//       <div className={classes.secureMsg}>
//         <img width="35" height="35" src="/assets/icons/security-secure.png" />
//         <p>Safe & Secure Payment</p>
//       </div>
//       <button className={classes.submit}>Process To Payment</button>
//     </div>
//   );
// };

// const DebitCard = () => {
//   const paymentOptions = [
//     {
//       src: "/assets/icons/svgs/Mastercard-Logo.wine.svg",
//       alt: "Master Card",
//     },
//     {
//       src: "/assets/icons/svgs/American_Express-Logo.wine.svg",
//       alt: "American express",
//     },
//     {
//       src: "/assets/icons/svgs/diners2.svg",
//       alt: "Diners",
//     },
//     {
//       src: "/assets/icons/svgs/Visa_Inc.-Logo.wine.svg",
//       alt: "Visa",
//     },
//     {
//       src: "/assets/icons/svgs/rupay.svg",
//       alt: "Rupay",
//     },
//   ];
//   return (
//     <div className={classes.paymentCards}>
//       <h3 className={classes.upiHeading}>Enter Your Card Details</h3>
//       <div className={classes.MethodBtn}>
//         {paymentOptions.map((option, index) => (
//           <button key={index} className={classes.mBtnDebit}>
//             <img src={option.src} alt={option.alt} height={35} width="auto" />
//           </button>
//         ))}
//       </div>
//       <div className={classes.debitMsgBox}>
//         <span>!</span>
//         <p className={classes.msgDebit}>
//           {" "}
//           Please ensure youe card is enabled for online transaction.{" "}
//         </p>
//         <a href="#">know more</a>
//       </div>
//       <input
//         className={classes.upiEnter}
//         type="text"
//         placeholder="Card Number"
//       />
//       <span className={classes.cardInputs}>
//         <span className={classes.dateBox}>
//           <input
//             className={classes.upiEnter}
//             type="text"
//             placeholder="Expiry Date"
//           />
//           <span className={classes.date}>
//             <IconCalendarMonth className={classes.dateIcon} stroke={2} />
//           </span>
//         </span>
        
//         <span className={classes.dateBox}>
//         <input className={classes.upiEnter} type="Password" placeholder="CVV" />
//           <span className={classes.date}>
//             <IconCreditCardPay className={classes.dateIcon} stroke={2} />
//           </span>
//         </span>
//       </span>

//       <input
//         className={classes.upiEnter}
//         type="text"
//         placeholder="Card Holder Name"
//       />
//       <div className={classes.secureMsg}>
//         <img width="35" height="35" src="/assets/icons/security-secure.png" />
//         <p>Safe & Secure Payment</p>
//       </div>
//       <button className={classes.submit}>Process To Payment</button>
//     </div>
//   );
// };
// const NetCard = () => {
//   const paymentOptions = [
//     {
//       src: "/assets/icons/banksSVG/icici.svg",
//       alt: "icici bank",
//     },
//     {
//       src: "/assets/icons/banksSVG/hdfc.svg",
//       alt: "hdfc bank",
//     },
//     {
//       src: "/assets/icons/banksSVG/axis.svg",
//       alt: "axis bank",
//     },
//     {
//       src: "/assets/icons/banksSVG/sbi.svg",
//       alt: "sbi",
//     },
//     {
//       src: "/assets/icons/banksSVG/badoda.svg",
//       alt: "bank of badoda",
//     },
//   ];
//   return (
//     <div className={classes.paymentCards}>
//       <h3 className={classes.upiHeading}>Select Your Bank</h3>
//       <div className={classes.MethodBtn}>
//         {paymentOptions.map((option, index) => (
//           <button key={index} className={classes.mBtnNetBank}>
//             <img src={option.src} alt={option.alt} height={35} width="auto" />
//           </button>
//         ))}
//       </div>
 
//       <div className={classes.secureMsg}>
//         <img width="35" height="35" src="/assets/icons/security-secure.png" />
//         <p>Safe & Secure Payment</p>
//       </div>
//       <button className={classes.submit}>Process To Payment</button>
//     </div>
//   );
// };





// const CustomSelect = ({ options, label, onChange }) => {
//   const [selectedValue, setSelectedValue] = useState('');
//   const [isOpen, setIsOpen] = useState(false);

//   const handleSelect = (option) => {
//     setSelectedValue(option);
//     onChange(option);
//     setIsOpen(false);
//   };

//   return (
//     <div className="custom-select">
//       <div className="select-label" onClick={() => setIsOpen(!isOpen)}>
//         {label}
//       </div>
//       <div className="select-value" onClick={() => setIsOpen(!isOpen)}>
//         {selectedValue || 'Select an option'}
//       </div>
//       {isOpen && (
//         <ul className="select-options">
//           {options.map((option, index) => (
//             <li key={index} onClick={() => handleSelect(option)}>
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

import React from "react";
import classes from "./Payment.module.css";
import PaymentMethods from "./PaymentMethods";
import Plans from "./Plans";

const PaymentGetway = () => {
  return (
    <div className={`${classes.pageSection} container-xl`}>
      <h2 className={`${classes.headingMob} visibleFrom-lg`}>
        Select Payment Method
      </h2>
      <div className={classes.sec1}>
        <h2 className={`${classes.heading} hiddenFrom-lg`}>
          Select Payment Method
        </h2>
        <PaymentMethods />
      </div>
      <Plans />
    </div>
  );
};

export default PaymentGetway;

