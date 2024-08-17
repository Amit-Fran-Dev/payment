import React, { useState } from "react";
import classes from "./Payment.module.css";
import { Bank, Debit, Upi } from "./svgs/card";
import UpiCard from "./UpiCard";
import DebitCard from "./DebitCard";
import NetCard from "./NetCard";

const PaymentMethods = () => {
  const [active, setActive] = useState(1);
  const [switchPay, setSwitchPay] = useState("UpiCard");

  const toggleCard =
    (switchPay === "UpiCard" && <UpiCard />) ||
    (switchPay === "DebitCard" && <DebitCard />) ||
    (switchPay === "NetCard" && <NetCard />);

  const handleSetSwitchPay = (val, act) => {
    setSwitchPay(val);
    setActive(act);
  };

  return (
    <div className={classes.paymentBox}>
      <div className={classes.paymentMethods}>
        <div
          onClick={() => handleSetSwitchPay("UpiCard", 1)}
          className={classes.upi}
          data={active}
        >
          <div className={classes.logo}>
            <Upi />
          </div>
          <div className={classes.methodContainer}>
            <h3 className={classes.name}>UPI Options</h3>
            <p className={classes.description}>
              Pay Directly From Your Bank Account
            </p>
          </div>
        </div>
        <div
          onClick={() => handleSetSwitchPay("DebitCard", 2)}
          className={classes.DbCb}
          data={active}
        >
          <div className={classes.logo}>
            <Debit />
          </div>
          <div className={classes.methodContainer}>
            <h3 className={classes.name}>Debit/Credit Card</h3>
            <p className={classes.description}>
              Visa, MasterCard, AMEX, Rupay and DinnerClub
            </p>
          </div>
        </div>
        <div
          onClick={() => handleSetSwitchPay("NetCard", 3)}
          className={classes.netB}
          data={active}
        >
          <div className={classes.logo}>
            <Bank />
          </div>
          <div className={classes.methodContainer}>
            <h3 className={classes.name}>NetBanking</h3>
            <p className={classes.description}>All Measure Banks Available</p>
          </div>
        </div>
      </div>
      {toggleCard}
    </div>
  );
};

export default PaymentMethods;
