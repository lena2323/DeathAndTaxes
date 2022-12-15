import React, { useState } from "react";
import {InputFormIncomeYearly} from "./index";


export default function InputFormIncomeHandleSumbit(){
  
  let yearlyIncomeReduced
  let childReduced
  let propertyReduced
  let maritalReduced

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
        totalIncomeAfterTax
    }

    

    if (grossIncomeYearly >= 1000)  {
      setTax20Percent("Your base for tax is 20%, you owe this country "+ grossIncomeYearly*20/100)
      yearlyIncomeReduced = grossIncomeYearly*20/100
    } 
     if (grossIncomeYearly <=1000) {
      setTax20Percent( "Your base for tax is 10%, you owe this country "+ grossIncomeYearly*10/100 + " $")
      yearlyIncomeReduced = grossIncomeYearly*10/100

    } 



    if (childrenNumber >= 1)  {
      setChildrenTaxReduction("Your tax is reduced by 1% which is exactly "+ grossIncomeYearly*1/100 + " $")
      childReduced = grossIncomeYearly*1/100
    } 
     if (childrenNumber <= 0) {
      setChildrenTaxReduction( "You have no reduction")
      childReduced = 0

    } 


    
    if (propertyOwnership >= 1)  {
      setPropertyOwnershipTaxReduction("You have no reduction")
      propertyReduced = 0
    } 
     if (propertyOwnership <= 0) {
      setPropertyOwnershipTaxReduction( "Your tax is reduced by 1% which is exactly "+ grossIncomeYearly*1/100 + " $")
      propertyReduced = grossIncomeYearly*1/100
    } 


    
    if (maritalStatus == "married")  {
      setMaritalStatusTaxReduction("Your tax is reduced by 2% which is exactly "+ grossIncomeYearly*2/100 + " $")
      maritalReduced = grossIncomeYearly*2/100
     
    } 
    if (maritalStatus == "single") {
      setMaritalStatusTaxReduction( "You have no reduction")
      maritalReduced = 0
    } 
    if (maritalStatus == "widow/Widower")  {
      setMaritalStatusTaxReduction("Your tax is reduced by 3% which is exactly "+ grossIncomeYearly*3/100 + " $")
      maritalReduced = grossIncomeYearly*3/100
    } 

    console.log(newGrossIncomeYearly);

    

    setTotalTax(  yearlyIncomeReduced - (childReduced + propertyReduced + maritalReduced) )

    
    setTotalIncomeAfterTax(grossIncomeYearly -  (yearlyIncomeReduced - (childReduced + propertyReduced + maritalReduced)))
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
    setTotalIncomeAfterTax
  }
  

  return (
    <div className="flex-col max-w-6xl">
    < InputFormIncomeYearly submitState={grossIncomeYearlyData}/>
    
    <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
        <h1></h1>
        <table className='   min-[320px]:max-w-sm table-auto md:table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='text-center	'>
              <th  className="py-3 px-6">
                  Yearly income
              </th>
              <th className="py-3 px-6">
                  Number of children
              </th>
              <th  className="py-3 px-6">
                  Property ownership
              </th>
              <th  className="py-3 px-6"  >
                  Marital status
              </th>
            </tr>

          </thead>

          <tbody >
          


          < tr className=' border text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 '>
          <td className='border  py-3 px-6' ><a className='float-right'>{grossIncomeYearly}</a></td>
          <td className='border py-3 px-6 '> <a className='float-right'>{childrenNumber}</a></td>
          <td className='border py-3 px-6'> <a className='float-right'>{propertyOwnership}</a></td>
          <td className='border py-3 px-6'><a className='float-right' >{maritalStatus}</a></td>
          </tr>

          < tr className=' border text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 '>
          <td className='border  py-3 px-6'><a className='float-right'>{tax20percent}</a></td>

          <td className='border py-3 px-6 '>
          <a className='float-right'>{childrenTaxReduction}</a></td>
          <td className='border py-3 px-6'><a className='float-right'>{propertyOwnershipTaxReduction}</a></td>
          <td className='border py-3 px-6'> <a className='float-right'>{maritalStatusTaxReduction}</a></td>
          </tr>
          </tbody>    
        </table>
        <h1 className="text-center"> You owe exactly {totalTax}$ so you can keep {totalIncomeAfterTax}$</h1>
    </div>
    </div>
  )
}

