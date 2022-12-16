import React, { useState } from "react";
import {InputFormIncomeYearly} from "./index";


export default function InputFormIncomeHandleSumbit(){
  
  let yearlyIncomeReduced
  let childReduced
  let propertyReduced
  let maritalReduced

  let baseForBase
  let childForBase
  let propertyForBase
  let maritalForBase

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
        totalIncomeAfterTax,
        effectiveTaxRate
    }

    

    if (grossIncomeYearly >= 1000)  {
      setTax20Percent("Your base tax rate is 20%, you owe this country "+ grossIncomeYearly*20/100)
      yearlyIncomeReduced = grossIncomeYearly*20/100
      baseForBase = 20
    } 
     if (grossIncomeYearly <=1000) {
      setTax20Percent( "Your base tax rate is 10%, you owe this country "+ grossIncomeYearly*10/100 + " $")
      yearlyIncomeReduced = grossIncomeYearly*10/100
      baseForBase= 10

    } 



    if (childrenNumber >= 1)  {
      setChildrenTaxReduction("Your tax is reduced by 1% which is exactly "+ grossIncomeYearly*1/100 + " $")
      childReduced = yearlyIncomeReduced*1/100
      childForBase = 1
    } 
     if (childrenNumber <= 0) {
      setChildrenTaxReduction( "You have no reduction")
      childReduced = 0
      childForBase = 0
    } 


    
    if (propertyOwnership >= 1)  {
      setPropertyOwnershipTaxReduction("You have no reduction")
      propertyReduced = 0
      propertyForBase = 0
    } 
     if (propertyOwnership <= 0) {
      setPropertyOwnershipTaxReduction( "Your tax is reduced by 1% which is exactly "+ grossIncomeYearly*1/100 + " $")
      propertyReduced = yearlyIncomeReduced*1/100
      propertyForBase = 1
    } 


    
    if (maritalStatus == "married")  {
      setMaritalStatusTaxReduction("Your tax is reduced by 2% which is exactly "+ yearlyIncomeReduced*2/100 + " $")
      maritalReduced = yearlyIncomeReduced*2/100
      maritalForBase = 2
    } 

    if (maritalStatus == "single") {
      setMaritalStatusTaxReduction( "You have no reduction")
      maritalReduced = 0
      maritalForBase = 0
    } 

    if (maritalStatus == "widow/Widower")  {
      setMaritalStatusTaxReduction("Your tax is reduced by 3% which is exactly "+ yearlyIncomeReduced*3/100 + " $")
      maritalReduced = yearlyIncomeReduced*3/100
      maritalForBase = 3
    } 

    console.log(newGrossIncomeYearly);

    

    setTotalTax(  yearlyIncomeReduced - (childReduced + propertyReduced + maritalReduced) )

    
    setTotalIncomeAfterTax(grossIncomeYearly -  (yearlyIncomeReduced - (childReduced + propertyReduced + maritalReduced)))

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
    setTotalIncomeAfterTax,
    setEffectiveTaxRate
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

