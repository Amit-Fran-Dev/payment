import plans from "./plans.module.css";
import { IconChevronDown } from "@tabler/icons-react";
import { IconCar, IconTagFilled  } from "@tabler/icons-react";
import { useState } from "react";

const Plans = () => {
  return (
    <div className={plans.container}>
      <div className={plans.scrollBox}>
        <PlansCard />
        <PriceCard />
      </div>
    </div>
  );
};

export default Plans;

export const PlansCard = () => {
  const [opened, toggleOpened] = useToggle();

  const fromDate = {
    date: "Feb 15, 2024",
    time: "Saturday 6:30 PM",
  };
  const toDate = {
    date: "Feb 18, 2024",
    time: "Saturday 10:30 AM",
  };

  const toggleCabin = () => {
    toggleOpened();
  };
  return (
    <div className={plans.card}>
      <h3>Mumbai- Goa- Lakshadweep- Mumbai (5N/6D)</h3>
      <div className={plans.dateContainer}>
        <div className={plans.fromDate}>
          <h4>{fromDate.date}</h4>
          <p>{fromDate.time}</p>
        </div>
        <div className={plans.centerLogo}>
          <img src="/assets/icons/ship.svg" width="30" height="30" />
        </div>
        <div className={plans.toDate}>
          <h4>{toDate.date}</h4>
          <p>{toDate.time}</p>
        </div>
      </div>

      <div className={plans.cabin}>
        <CabinTable opened={opened} />
      </div>

      <div className={plans.more}>
        <button onClick={toggleCabin}>
          View Details
          <IconChevronDown
            className={`${plans.icon} ${opened ? plans.iconopened : ""}`}
            stroke={3}
          />
        </button>
      </div>
    </div>
  );
};

export const PriceCard = () => {
  const [opened, toggleOpened] = useToggle();

  const togglePrice = () => {
    toggleOpened();
  };
  return (
    <div
      className={plans.card}
      style={{ background: "#fff", paddingTop: 0, padding: "0" }}
    >
      <span className={plans.priceCardHead}>
        <h4>Price Details</h4>
        <p onClick={togglePrice}>
          {opened ? "Hide Price Breakup " : "View Price Breakup"}
        </p>
      </span>

      <div
        className={plans.cabin}
        style={{ padding: "1rem 0", paddingTop: "0" }}
      >
        <PriceTable opened={opened} />
      </div>

      <span
        className={`${plans.priceCardHead} ${plans.totalRsBox}`}
        style={{ border: "none" }}
      >
        <h4 className={plans.label}>Total Fare</h4>
        <h4 className={plans.totalRs}>₹ 67273</h4>
      </span>
    </div>
  );
};

export const CabinTable = ({ opened }) => {
  const cabins = [
    {
      id: 1,
      icon: <IconCar className={plans.car} stroke={2} />,
      title: "CABIN 1",
      description: "Ocean View Cabin",
      guestNumberLabel: "Guest No",
      guestNumber: 4,
    },
    {
      id: 2,
      icon: <IconCar className={plans.car} stroke={2} />,
      title: "CABIN 2",
      description: "Mini Suit Cabin",
      guestNumberLabel: "Guest No",
      guestNumber: 4,
    },
  ];

  return (
    <div>
      {cabins.map((cabin) => (
        <table
          key={cabin.id}
          className={`${plans.rows} ${opened ? plans.opened : ""}`}
        >
          <tbody style={{ textAlign: "left" }}>
            <tr>
              <td className={plans.firstRow1}>
                {cabin.icon} <p>{cabin.title}</p>
              </td>
            </tr>
            <tr>
              <td className={plans.firstRow2}>
                <h4>{cabin.description}</h4>
              </td>
            </tr>
          </tbody>
          <tbody style={{ textAlign: "right" }}>
            <tr>
              <td className={plans.secondRow1}>
                <p>Guest No</p>
              </td>
            </tr>
            <tr>
              <td className={plans.secondRow2}>
                <h4>{cabin.guestNumber}</h4>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export const PriceTable = ({ opened }) => {
  const PriceList = [
    {
      title: "Ocean View Cabin",
      price: "18,260",
    },
    {
      title: "Mini Suite Cabin",
      price: "18,260",
    },
    {
      title: "Service Charge & Levies",
      price: "19,754",
    },
    {
      title: "Fuel Surcharge",
      price: "4,980",
    },
    {
      title: "Kids sail offer",
      price: "5,980",
      offer: true,
    },
  ];

  const TaxGst = [
    {
      title: "Taxes",
      price: "14,100",
    },
    {
      title: "Gst",
      price: "14,109",
    },
  ];

  return (
    <div className={plans.priceTableBox}>
      <ul className={`${plans.priceTable} ${opened ? plans.opened : ""}`}>
        {PriceList.map((cabin, index) => (
          <li key={index} className={plans.priceList}>
            <p offer={cabin.offer ? "active" : ""} className={plans.title}>
              {cabin.title}{" "}
              {cabin.offer ? (
                <IconTagFilled  width={20} height={20} stroke={2} />
              ) : null}
            </p>
            <p offer={cabin.offer ? "active" : ""} className={plans.price}>
            ₹ {cabin.price}
            </p>
          </li>
        ))}
        <span>
          {TaxGst.map((cabin, index) => (
            <li key={index} className={`${plans.priceList} ${plans.taxesGst}`}>
              <p offer={cabin.offer ? "active" : ""} className={plans.title}>
                {cabin.title}{" "}
                {cabin.offer ? (
                  <IconTagFilled  width={20} height={20} stroke={2} />
                ) : null}
              </p>
              <p offer={cabin.offer ? "active" : ""} className={plans.price}>
              ₹ {cabin.price}
              </p>
            </li>
          ))}
        </span>
      </ul>
    </div>
  );
};

function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggle = () => setIsOpen((prev) => !prev);

  return [isOpen, toggle];
}
