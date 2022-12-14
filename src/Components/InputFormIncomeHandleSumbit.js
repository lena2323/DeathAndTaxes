import React, { useState } from "react";
import {InputFormIncomeYearly} from "./index";
import { CreateTable } from './index';


export default function InputFormIncomeHandleSumbit(){
  

  const [grossIncomeYearly, setGrossIncomeYearly] = useState('')
  const [childrenNumber, setChildrenNumber] = useState("")
  const [propertyOwnership, setPropertyOwnership] = useState("")
  const [maritalStatus, setMaritalStatus] = useState("")

  const handleSubmit = (event) =>{
    event.preventDefault();

    const newGrossIncomeYearly = {
        grossIncomeYearly,
        childrenNumber,
        propertyOwnership,
        maritalStatus
    }

    console.log(newGrossIncomeYearly);
    

  }


  
  let grossIncomeYearlyData = {
    handleSubmit,
    setGrossIncomeYearly,
    setChildrenNumber,
    setPropertyOwnership,
    setMaritalStatus
  }
  

  return (
    <div>
    < InputFormIncomeYearly submitState={grossIncomeYearlyData}/>
    <CreateTable inputYearlyGrossIncome = {grossIncomeYearly} />
    </div>
  )
}

