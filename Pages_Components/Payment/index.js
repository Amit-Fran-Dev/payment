import React from "react";
import classes from "./Payment.module.css";
import PaymentMethods from "./PaymentMethods";
import Plans from "./Plans";
import { IconArrowLeft } from "@tabler/icons-react";

const PaymentGetway = () => {
  return (
    <div className={`${classes.pageSection} container-xl`}>
      <HeadingMob title="Select Payment Method" />
      <div className={classes.sec1}>
        <HeadingDesk title="Select Payment Method"/>
        <PaymentMethods />
      </div>
      <Plans />
    </div>
  );
};

export default PaymentGetway;

export const HeadingMob = ({ title }) => {
  return (
    <h2 className={`${classes.headingMob} visibleFrom-lg`}>
      <IconArrowLeft
        width={40}
        height={40}
        style={{ cursor: "pointer" }}
        title="Go Back"
        onClick={() => {
          window.history.back();
        }}
        stroke={2}
      />
      {title}
    </h2>
  );
};
export const HeadingDesk = ({ title }) => {
  return (
    <h2 className={`${classes.heading} hiddenFrom-lg`}>
      <IconArrowLeft
        width={40}
        height={40}
        style={{ cursor: "pointer" }}
        title="Go Back"
        onClick={() => {
          window.history.back();
        }}
        stroke={2}
      />
      {title}
    </h2>
  );
};

export const Heading = ({ title }) => {
  return (
    <h2 className={`${classes.heading}`}>
      <IconArrowLeft
        width={40}
        height={40}
        style={{ cursor: "pointer" }}
        title="Go Back"
        onClick={() => {
          window.history.back();
        }}
        stroke={2}
      />
      {title}
    </h2>
  );
};
