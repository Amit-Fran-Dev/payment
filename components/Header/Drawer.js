// Drawer.js
import React from 'react';
import styles from './Drawer.module.css';
import { IconX } from "@tabler/icons-react";
import { links } from '.';

function Drawer({ isOpen, onClose }) {
  return (
    <>
      <div className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`} onClick={onClose}></div>

      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
        CORDELIA CRUISES
          <button className={styles.closeButton} onClick={onClose}>
          <IconX className={styles.cancel} width={30} height={30} stroke={2} /></button>
        </div>
        <div className={styles.drawerContent}>
      <div className={styles.navigationContainer}>
        <ul className={`${styles.navigations}`}>{links}</ul>
      </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
