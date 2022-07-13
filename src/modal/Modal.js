import React from 'react'
import Back from './Back'
import DetailForm from './DetailForm'
import Header from './Header'
import './modal.css'
import { useGlobalContext } from '../Context'
//import { Routes, Route } from "react-router-dom"

function Modal() {
  const {page} = useGlobalContext()
  return (
    <div className='overlay'>
        <div className="modal">
          {page ===2 && <Back />}
          {/* <Back /> */}
          <Header/>
          <DetailForm/>
        </div>
    </div>
  )
}

export default Modal
