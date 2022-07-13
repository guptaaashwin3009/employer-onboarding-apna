import React from 'react'
import RadioButton from './RadioButton'
//import owncompany from "../logos/owncompany.svg"
//import clients from "../logos/clients.svg"
import { useGlobalContext } from "../Context";
import { planData } from "./data";


function Options() {

  const { setSelectedPlanRadio } = useGlobalContext();

  const handleOnClick = (plan) => {
    setSelectedPlanRadio(plan.id);
  };

  return (
    <div className="options">
    {planData.map((plan) => {
      return (
        <RadioButton handleClick={handleOnClick} key={plan.id} plan={plan} />
      );
    })}
  </div>
);
}

export default Options
