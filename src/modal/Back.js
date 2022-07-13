import React from 'react'
import { useGlobalContext } from '../Context'
import back from "../logos/backlogo.svg"

function Back() {
  const {setPage} = useGlobalContext()

  // making back button functional using the page state

  const handleBackBtn =(e) => {
    //if(selectedPlanRadio!=null){
      e.stopPropagation();
      setPage(1)
 
  }

  return (
    <div className='back' onClick={handleBackBtn}>
      <img src={back} alt="back" />
      <span>Back</span>
    </div>
  )
}

export default Back
