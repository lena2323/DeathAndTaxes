import React, { useState } from "react";
import {InputFormIncomeYearly} from "./index";
import { CreateTable } from './index';


export default function InputFormIncomeHandleSumbit(){
  

  const [grossIncomeYearly, setGrossIncomeYearly] = useState('')
  const [childrenNumber, setChildrenNumber] = useState("")
  const [propertyOwnership, setPropertyOwnership] = useState("")
  const [maritalStatus, setMaritalStatus] = useState("")

  const [tax20percent, setTax20Percent] = useState("")



  const handleSubmit = (event) =>{
    event.preventDefault();

    const newGrossIncomeYearly = {
        grossIncomeYearly,
        childrenNumber,
        propertyOwnership,
        maritalStatus,
        tax20percent
        
    }

    console.log(newGrossIncomeYearly);
    



    
    if (grossIncomeYearly >= 1000)  {
      setTax20Percent = grossIncomeYearly*20/100;
    } 
    else if (grossIncomeYearly <=1000) {
      setTax20Percent = grossIncomeYearly*10/100;
    } 


  }


  let grossIncomeYearlyData = {
    handleSubmit,
    setGrossIncomeYearly,
    setChildrenNumber,
    setPropertyOwnership,
    setMaritalStatus,
    setTax20Percent
  }
  

  return (
    <div>
    < InputFormIncomeYearly submitState={grossIncomeYearlyData}/>
    <CreateTable newData ={grossIncomeYearlyData} 
    />
    </div>
  )
}

