import React from "react";
import classes from "./Appshell.module.css";
import Header from "../Header";
const AppShell = ({ children }) => {
  return (
    <>
      <header className={classes.header}><Header/></header>
      <main>{children}</main>
    </>
  );
};

export default AppShell;
