import React, { useState } from "react";
import {InputFormIncomeYearly} from "./index";


export default function InputFormIncomeHandleSumbit(){
  
    let targetedGrossIncomeYearly
    let targedChildrenNumber
    let targetedpropertyOwnership 
    let targetedMaritalStatus

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
    
     targetedGrossIncomeYearly = newGrossIncomeYearly.grossIncomeYearly;
     targedChildrenNumber = newGrossIncomeYearly.childrenNumber;
     targetedpropertyOwnership = newGrossIncomeYearly.propertyOwnership;
     targetedMaritalStatus = newGrossIncomeYearly.maritalStatus;
    
    console.log(targetedGrossIncomeYearly,targedChildrenNumber, targetedpropertyOwnership, targetedMaritalStatus )


  }


  let grossIncomeYearlyData = {
    handleSubmit,
    setGrossIncomeYearly,
    setChildrenNumber,
    setPropertyOwnership,
    setMaritalStatus
  }
  

  return (
    
    < InputFormIncomeYearly submitState={grossIncomeYearlyData}/>
  )
}

