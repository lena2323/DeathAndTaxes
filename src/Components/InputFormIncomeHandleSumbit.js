import React, { useState } from "react";
import {InputFormIncomeYearly} from "./index";


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
        setTax20Percent(grossIncomeYearly*20/100)
      } 
      else if (grossIncomeYearly <=1000) {
        setTax20Percent(grossIncomeYearly*10/100)
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
    
    <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
        <h1></h1>
        <table className=' table-auto md:table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400'>
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
          <td className='border  py-3 px-6' ><a className='float-right'>{tax20percent}</a></td>
          <td className='border py-3 px-6 '> <a className='float-right'></a></td>
          <td className='border py-3 px-6'> <a className='float-right'></a></td>
          <td className='border py-3 px-6'><a className='float-right' ></a></td>
          </tr>

          < tr className=' border text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 '>
          <td className='border  py-3 px-6'></td>

          <td className='border py-3 px-6 '>
          
          <a className='float-right'></a></td>
          <td className='border py-3 px-6'><a className='float-right'></a></td>
          <td className='border py-3 px-6'> <a className='float-right'></a></td>
          </tr>
          </tbody>    
        </table>
        
    </div>
    </div>
  )
}

