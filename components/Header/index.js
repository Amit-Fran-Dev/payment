import React, { useState } from "react";
import classes from "./Header.module.css";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Drawer from "./Drawer"

const Header = () => {
  const [opened, toggleOpened] = useToggle();
  const logo = "CORDELIA CRUISES";


  return (
    <div
      className={`${classes.section} container-xl`}
      style={{ minHeight: "60px" }}
    >
      <Drawer isOpen={opened} onClose={toggleOpened}/>
      <div className={classes.logoSection}>
        <h1 className={classes.logo}>{logo}</h1>
      </div>
      <div>
        <ul className={`${classes.navigations} hiddenFrom-lg`}>{links}</ul>
      </div>
      <div className="flex gap-4">
        <div className={`${classes.action} hiddenFrom-md`}>
          <button className={`${classes.btn1}`}>Find a Cruise</button>
          <button className={`${classes.btn2}`}>Web Check-in</button>
        </div>
        <button className="visibleFrom-lg" onClick={toggleOpened}>
          {!opened ? (
            <IconMenu2
              className={classes.menu}
              width={35}
              height={35}
              stroke={2}
            />
          ) : (
            <IconX className={classes.menu} width={35} height={35} stroke={2} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
export const navigations = [
  {
    name: "Offers",
    links: "#",
  },
  {
    name: "Destinations",
    links: "#",
  },
  {
    name: "Events",
    links: "#",
  },
  {
    name: "Ships",
    links: "#",
  },
  {
    name: "Contact",
    links: "#",
  },
];
function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggle = () => setIsOpen((prev) => !prev);

  return [isOpen, toggle];
}

export const links = navigations.map((nav, index) => {
  return (
    <li key={index}>
      <a href={nav.links}>{nav.name}</a>
    </li>
  );
});

