import React from 'react'
import { useGlobalContext } from '../Context'
import InputField from './InputField'

function RadioForm() {
  const{selectedPlanRadio,companyName,companuWebsite, setCompanyWebsite, setCompanyName,hireForName,setHireForName,consultancyName,setconsultancyName, consultancyWebsite, setConsultancyWebsite} = useGlobalContext()

  return (
    <>
        {selectedPlanRadio === 1 && (
          <>
           <InputField isOptional ={false} value={companyName} setValue={setCompanyName} label={"Your company name"} placeholder ={"Example: apna"}/>
           <InputField isOptional ={true} value ={companuWebsite} setValue={setCompanyWebsite} label={"Company Website"} placeholder={"Example: www.companyname.com"}/>
          </>

        )}
        {selectedPlanRadio === 2 && (
          <>
            <InputField isOptional ={false} value={hireForName} setValue={setHireForName} label={"Clients you normally hire for"} placeholder={"Example: Swiggy, Zomato, Flipkart"}/>
            <InputField isOptional ={true} value={consultancyName} setValue={setconsultancyName} label={"Your consultancy name"} placeholder={"Example: Abc consultancy"}/>
            <InputField isOptional ={true} value ={consultancyWebsite} setValue ={setConsultancyWebsite} label={"Consultancy website"} placeholder={"Example: www.abc.com "}/>
          </>
        )}
    </>
  )
}

export default RadioForm