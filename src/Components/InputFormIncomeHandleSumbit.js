import React, { useState } from "react";
import {InputFormIncomeYearly} from "./index";


export default function InputFormIncomeHandleSumbit(){
  

  const [grossIncomeYearly, setGrossIncomeYearly] = useState(0)
  const [childrenNumber, setChildrenNumber] = useState(0)
  const [propertyOwnership, setPropertyOwnership] = useState(0)
  const [maritalStatus, setMaritalStatus] = useState("")

  const [tax20percent, setTax20Percent] = useState(0)
  const [childrenTaxReduction, setChildrenTaxReduction] = useState(0)
  const [propertyOwnershipTaxReduction, setPropertyOwnershipTaxReduction] = useState(0)
  const [maritalStatusTaxReduction, setMaritalStatusTaxReduction] = useState("")
  const [totalTax, setTotalTax] = useState(0)
  const [totalIncomeAfterTax, setTotalIncomeAfterTax] = useState(0)
  const [effectiveTaxRate, setEffectiveTaxRate] = useState(0)
  
  

  const [yearlyIncomeReduced, setYearlyIncomeReduced] = useState(0)
  const [baseForBase, setbaseForBase] = useState(0)

  const [childForBase, setChildForBase] = useState(0)
  const [propertyForBase, setPropertyForBase] = useState(0)
  const [maritalForBase, setMaritalForBase] = useState(0)
  


  const handleSubmit = (event) =>{
    event.preventDefault();

    const newGrossIncomeYearly = {
        grossIncomeYearly,
        childrenNumber,
        propertyOwnership,
        maritalStatus,
        tax20percent,
        childrenTaxReduction,
        propertyOwnershipTaxReduction,
        maritalStatusTaxReduction,
        totalTax,
        baseForBase,
        totalIncomeAfterTax,
        effectiveTaxRate,
        childForBase,
        propertyForBase,
        maritalForBase,
        yearlyIncomeReduced
    }

    

    if (grossIncomeYearly >= 1000)  {
      setTax20Percent("Your base tax rate is 20%, you owe this country "+ grossIncomeYearly*20/100);
      setYearlyIncomeReduced(grossIncomeYearly*20/100)
      setbaseForBase(20)
    } 
     if (grossIncomeYearly <=1000) {
      setTax20Percent( "Your base tax rate is 10%, you owe this country "+ grossIncomeYearly*10/100 + " $");
      setYearlyIncomeReduced(grossIncomeYearly*10/100)
      setbaseForBase(10)

    } 



    if (childrenNumber >= 1)  {
      setChildForBase(1);
      setChildrenTaxReduction("Your tax is reduced by 1% which is exactly "+ yearlyIncomeReduced*(baseForBase - (childForBase + propertyForBase + maritalForBase))/100 + " $")
    
    } 
     if (childrenNumber <= 0) {
      setChildForBase(0);
      setChildrenTaxReduction( "You have no reduction")
    } 


    
    if (propertyOwnership >= 1)  {
      setPropertyForBase(0);
      setPropertyOwnershipTaxReduction("You have no reduction")
      
    } 
     if (propertyOwnership <= 0) {
      setPropertyForBase(1);
      setPropertyOwnershipTaxReduction( "Your tax is reduced by 1% which is exactly "+ yearlyIncomeReduced*(baseForBase - (childForBase + propertyForBase + maritalForBase))/100 + " $")
      
    } 


    
    if (maritalStatus == "married")  {
      setMaritalForBase(1)      ; setMaritalStatusTaxReduction("Your tax is reduced by 2% which is exactly "+ yearlyIncomeReduced*(baseForBase - (childForBase + propertyForBase + maritalForBase))/100 + " $")
      
    } 

    if (maritalStatus == "single") {
      setMaritalForBase(0) ;
      maritalForBase = 0
      setMaritalStatusTaxReduction( "You have no reduction")
    } 

    if (maritalStatus == "widow/Widower")  {
      setMaritalForBase(1)     ;  setMaritalStatusTaxReduction("Your tax is reduced by 3% which is exactly "+ yearlyIncomeReduced*(baseForBase - (childForBase + propertyForBase + maritalForBase))/100 + " $")
    
    } 

    console.log(newGrossIncomeYearly);

    

    setTotalTax(  yearlyIncomeReduced - (childForBase + propertyForBase + maritalForBase) )

    
    setTotalIncomeAfterTax(grossIncomeYearly -  (yearlyIncomeReduced - (childForBase + propertyForBase + maritalForBase)))

    setEffectiveTaxRate(baseForBase - (childForBase + propertyForBase + maritalForBase))
  }


  let grossIncomeYearlyData = {
    handleSubmit,
    setGrossIncomeYearly,
    setChildrenNumber,
    setPropertyOwnership,
    setMaritalStatus,
    setTax20Percent,
    setChildrenTaxReduction,
    setPropertyOwnershipTaxReduction,
    setMaritalStatusTaxReduction,
    setTotalTax,
    setbaseForBase,
    setTotalIncomeAfterTax,
    setEffectiveTaxRate,
    setChildForBase,
    setPropertyForBase,
    setMaritalForBase,
    setYearlyIncomeReduced
  }
  

  return (
    <div className="flex-col max-w-5xl py-3  px-5 text-gray-800	">
    < InputFormIncomeYearly submitState={grossIncomeYearlyData}/>
    
    <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
        <table className=' font-philosopher table-auto md:table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
            <tr className='text-center	'>
              <th  className="py-6 px-3">
                  Yearly income
              </th>
              <th className="py-6 px-3">
                  Number of children
              </th>
              <th  className="py-6 px-3">
                  Property ownership
              </th>
              <th  className="py-6 px-3"  >
                  Marital status
              </th>
            </tr>

          </thead>

          <tbody className="font-medium	">
          


          < tr className='  border text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400 '>
          <td className='border py-5 px-3' ><a className='float-right'>{grossIncomeYearly}</a></td>
          <td className='border py-5 px-3'> <a className='float-right'>{childrenNumber}</a></td>
          <td className='border py-5 px-3'> <a className='float-right'>{propertyOwnership}</a></td>
          <td className='border py-5 px-3'><a className='float-right' >{maritalStatus}</a></td>
          </tr>

          < tr className=' border text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400 '>
          <td className='border  py-5 px-3'><a className='float-right'>{tax20percent}</a></td>

          <td className='border py-5 px-3 '>
          <a className='float-right'>{childrenTaxReduction}</a></td>
          <td className='border py-5 px-3'><a className='float-right'>{propertyOwnershipTaxReduction}</a></td>
          <td className='border py-5 px-3'> <a className='float-right'>{maritalStatusTaxReduction}</a></td>
          </tr>
          </tbody>    
        </table>
        <h1 className="text-center font-philosopher text-red-700 bg-white py-6"> Your effective tax rate is {effectiveTaxRate}% so you owe exactly {totalTax}$ so you can keep {totalIncomeAfterTax}$</h1>
    </div>
    </div>
  )
}

