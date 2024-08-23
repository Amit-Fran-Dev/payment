import { IconArrowLeft } from "@tabler/icons-react"
import styles from "./css/health-declaration.module.css"
import { Heading } from "../Payment";
import Stepper from "./Stepper";
import { useEffect, useState } from "react";
import HealthDeclaration from "./HealthDeclaration";
import ArrivalTime from "./Arrival-time";
import TravelInfo from "./Travel-info";
const Cabin = () => {
  const [activeBox, setActiveBox] = useState(1);
  const [activeState, setactiveState] = useState(3);

  const props = {
    activeBox: activeBox,
    active: activeState,
    activeState,
    setActiveBox,
    setactiveState,
  }
  useEffect(() => {
    setActiveBox(activeState)
  }, [activeState])
  
  return (
    <div className="container-xl pb-9">
    <Heading title="Cabin 1 : Gustavo Culhane"/>
    <Stepper {...props}/>
    {
    activeBox == 1 && <TravelInfo/>
    }
    {
    activeBox == 2 && <ArrivalTime/>
    }
    {
    activeBox == 3 && <HealthDeclaration/>
    }
    </div>
  )
}

export default Cabin;
