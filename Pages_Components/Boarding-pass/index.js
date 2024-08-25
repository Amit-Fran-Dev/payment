import React from "react";
import styles from "./css/pass.module.css";
import { Heading } from "../Payment";
import { IconDownload, IconShare } from "@tabler/icons-react";

const BoardingPass = () => {
  return (
    <div className={`${styles.pass} container-xs`}>
      <Heading title="Boarding Pass" />
      <PassCard />
      <Condidate />
      <div className={styles.dividerMain} />
      <CabinCat />
      <DownloadAndShare />
    </div>
  );
};

export default BoardingPass;

export const PassCard = () => {
  const fromDate = {
    date: "Tue 09 Jul 2024",
    time: "IST 8:30 am",
  };
  const toDate = {
    date: "Tue 09 Jul 2024",
    time: "IST 8:30 pm",
  };
  return (
    <div className={styles.passCard}>
      <div className={styles.cardSec1}>
        <img src="/assets/appLogo/white.svg" width="auto" height={35} />
        <div className={styles.bookingId}>
          <p>Booking Id</p>
          <p className={styles.idNO}>C-2212060002</p>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.cardSec2}>
        <div className={styles.departure}>
          <p>Departure port</p>
          <h3>Chennai</h3>
          <div className={styles.fromDate}>
            <h4>{fromDate.date}</h4>
            <p>{fromDate.time}</p>
          </div>
        </div>
        <div className={styles.centerLogo}>
          <img src="/assets/icons/ship.svg" width="60" height="60" />
        </div>
        <div className={styles.arrival}>
          <p>Arrival port</p>
          <h3>Chennai</h3>
          <div className={styles.toDate}>
            <h4>{toDate.date}</h4>
            <p>{toDate.time}</p>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.cardSec3}>
        <p>Halting Ports: Trincomalee, Hambantota, Jaffna</p>
      </div>
    </div>
  );
};

export const Condidate = () => {
  return (
    <div className={styles.condidate}>
      <div className={styles.name}>
        <p className={styles.label}>Name</p>
        <p>Manchikanti Yugandhar</p>
      </div>
      <div className={styles.ship}>
        <p className={styles.label}>Ship</p>
        <p>MV Empress</p>
      </div>
      <div className={styles.deck}>
        <p className={styles.label}>Deck</p>
        <p>03</p>
      </div>
      <div className={styles.stateroom}>
        <p className={styles.label}>Stateroom</p>
        <p>3143</p>
      </div>
      <div className={styles.MusterStation}>
        <p className={styles.label}>Muster Station</p>
        <p>10</p>
      </div>
      <div className={styles.port}>
        <p className={styles.label}>Port</p>
        <p>
          Mumbai International Cruise Terminal, Shoorji Vallabhadas Rd, Kala
          Ghoda, Fort, Mumbai, Maharashtra 400001.
        </p>
      </div>
    </div>
  );
};

export const CabinCat = () => {
  return (
    <div className={styles.cabinCat}>
      <div className={styles.catSec1}>
        <p className={styles.catLabel}>Cabin Category</p>
        <p>
          Ocean View <br /> Standard
        </p>
      </div>
      <div className={styles.catSec2}>
        <img
          src="/assets/qr.svg"
          width={120}
          height={120}
        />
      </div>
    </div>
  );
};

export const DownloadAndShare = () => {
  return (
    <>
      <button className={styles.downloadBPass}>
        Download Boarding Pass <IconDownload stroke={2} />
      </button>
      <button className={styles.shareVia}>
        Share via <IconShare stroke={2} />
      </button>
    </>
  );
};
