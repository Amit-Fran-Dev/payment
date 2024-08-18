
import React from 'react';
import styles from './Drawer.module.css';
import { IconX } from "@tabler/icons-react";
import { IconConfetti, IconMapPins, IconTicket, IconShip, IconAddressBook } from '@tabler/icons-react';

const links = [
  { text: 'Offer', icon: <IconConfetti stroke={2} className={styles.themeCol} /> },
  { text: 'Destination', icon: <IconMapPins stroke={2} className={styles.themeCol} /> },
  { text: 'Event', icon: <IconTicket stroke={2} className={styles.themeCol} /> },
  { text: 'Ships', icon: <IconShip stroke={2} className={styles.themeCol} /> },
  { text: 'Contact', icon: <IconAddressBook stroke={2} className={styles.themeCol} /> }
];

function Drawer({ isOpen, onClose }) {
  
  return (
    <>
      <div className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`} onClick={onClose}></div>

      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
        <img src="https://images.cordeliacruises.com/cordelia_v2/public/assets/cordelia-new-logo-mobile.svg" width="auto" height={60}/>
          <button className={styles.closeButton} onClick={onClose}>
            <IconX className={styles.cancel} width={30} height={30} stroke={2} />
          </button>
        </div>
        <div className={styles.drawerContent}>
          <div className={styles.navigationContainer}>
            <ul className={styles.navigations}>
              {links.map((link, index) => (
                <li key={index} className={styles.navigationItem}>
                  {link.icon}
                  {link.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
