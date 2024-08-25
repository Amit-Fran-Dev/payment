import { IconCheck } from "@tabler/icons-react";
import styles from "./css/stepper.module.css";
import { useEffect, useState } from "react";

const Stepper = ({ active,activeBox,activeState, setActiveBox,setactiveState }) => {
  const [activeCol, setActiveCol] = useState({
    step1: false,
    step2: false,
    step3: false,
  });

  useEffect(() => {
    switch (active) {
      case 1:
        setActiveCol({ step1: true, step2: false, step3: false });
        break;
      case 2:
        setActiveCol({ step1: true, step2: true, step3: false });
        break;
      case 3:
        setActiveCol({ step1: true, step2: true, step3: true });
        break;
      default:
        setActiveCol({ step1: false, step2: false, step3: false });
        break;
    }
  }, [active]);

  const handleClick =(n)=>{
    if(activeState >= n){
      setActiveBox(n);
      setactiveState(n)
    }
  }

  return (
    <div className={styles.stepper}>
      <div className={styles.stepBox}>
        <div onClick={()=>{handleClick(1)}} className={activeCol.step1 ? styles.activeSteps : styles.steps}>
          <IconCheck stroke={2.5} className={styles.icon} />
        </div>
        <p onClick={()=>{handleClick(1)}}>Travel Info</p>
      </div>
      <div className={styles.stepBox}>
        <div onClick={()=>{handleClick(2)}} className={activeCol.step2 ? styles.activeSteps : styles.steps}>
          <IconCheck stroke={2.5} className={styles.icon} />
        </div>
        <p onClick={()=>{handleClick(2)}}>Arrival Time</p>
      </div>
      <div className={styles.stepBox}>
        <div onClick={()=>{handleClick(3)}} className={activeCol.step3 ? styles.activeSteps : styles.steps}>
          <IconCheck stroke={2.5} className={styles.icon} />
        </div>
        <p onClick={()=>{handleClick(3)}}>Health Form</p>
      </div>
    </div>
  );
};

export default Stepper;
