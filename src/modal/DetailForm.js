import React from 'react'
import { useGlobalContext } from '../Context'
import CompanySize from './CompanySize'
import InputField from './InputField'
import Options from './Options'
import PrimaryButton from './PrimaryButton'
import RadioForm from './RadioForm'


const DetailForm = () => {

  const{userName,setUserName,page,selectedPlanRadio} = useGlobalContext()

    return (
      <form className='userform'>
          {page === 1 && (<InputField setValue={setUserName} value={userName} label={"What's Your Name"} placeholder ={"Example: Ramadugu Rakesh Kumar"}/>)}
          {page === 2 && (
            <>
                <Options />
                {selectedPlanRadio && 
                  <>
                    <RadioForm />
                    <CompanySize/>
                  </>}
            </>
          )}

      {page <= 2 && <PrimaryButton />}
      {page >= 3 && <>Form Submitted!</>}
        
      </form>
    )
}

export default DetailForm
