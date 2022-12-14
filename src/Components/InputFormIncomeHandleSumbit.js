import React, { useState } from 'react'
import { InputFormIncomeYearly, MainButton } from './index'

export default function InputFormIncomeHandleSumbit() {
  const refreshPage = () => {
    window.location.reload()
  }
  const [isVisible, setIsVisible] = useState(false)

  const [grossIncomeYearly, setGrossIncomeYearly] = useState(0)
  const [childrenNumber, setChildrenNumber] = useState(0)
  const [propertyOwnership, setPropertyOwnership] = useState(0)
  const [maritalStatus, setMaritalStatus] = useState('')

  const [tax20percent, setTax20Percent] = useState(0)
  const [childrenTaxReduction, setChildrenTaxReduction] = useState(0)
  const [propertyOwnershipTaxReduction, setPropertyOwnershipTaxReduction] = useState(0)
  const [maritalStatusTaxReduction, setMaritalStatusTaxReduction] = useState('')
  const [effectiveTaxRate, setEffectiveTaxRate] = useState(0)

  let baseForBase

  let yearlyIncomeReduced

  let childForBase
  let propertyForBase
  let maritalForBase

  let totalTax
  let totalIncomeAfterTax

  const handleSubmit = (event) => {
    event.preventDefault()

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
      effectiveTaxRate,
      isVisible,
    }

    if (grossIncomeYearly >= 1000) {
      setTax20Percent(
        'Your base tax rate is 20%, before reductions you owe this country ' +
          (grossIncomeYearly * 20) / 100,
      )
      yearlyIncomeReduced = (grossIncomeYearly * 20) / 100
      baseForBase = 20
    }
    if (grossIncomeYearly <= 1000) {
      setTax20Percent(
        'Your base tax rate is 10%, before reductions you owe this country ' +
          (grossIncomeYearly * 10) / 100 +
          ' $',
      )
      yearlyIncomeReduced = (grossIncomeYearly * 10) / 100
      baseForBase = 10
    }

    if (childrenNumber >= 1) {
      childForBase = 1
      setChildrenTaxReduction('Your tax is reduced by 1% ')
    }
    if (childrenNumber <= 0) {
      childForBase = 0
      setChildrenTaxReduction('You have no reduction')
    }

    if (propertyOwnership >= 1) {
      setPropertyOwnershipTaxReduction('You have no reduction')
      propertyForBase = 0
    }
    if (propertyOwnership <= 0) {
      setPropertyOwnershipTaxReduction('Your tax is reduced by 1%')
      propertyForBase = 1
    }

    if (maritalStatus == 'married') {
      setMaritalStatusTaxReduction('Your tax is reduced by 2% ')
      maritalForBase = 2
    }

    if (maritalStatus == 'single') {
      setMaritalStatusTaxReduction('You have no reduction')
      maritalForBase = 0
    }

    if (maritalStatus == 'widow/Widower') {
      setMaritalStatusTaxReduction('Your tax is reduced by 3% ')
      maritalForBase = 3
    }

    console.log(newGrossIncomeYearly)
    setIsVisible(true)

    setEffectiveTaxRate(baseForBase - (childForBase + propertyForBase + maritalForBase))
  }

  totalTax = (grossIncomeYearly * effectiveTaxRate) / 100
  totalIncomeAfterTax = grossIncomeYearly - totalTax

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
    setEffectiveTaxRate,
    setIsVisible,
  }

  return (
    <div className='flex-col max-w-5xl py-3 text-gray-800	'>
      {!isVisible && <InputFormIncomeYearly submitState={grossIncomeYearlyData} />}

      {isVisible && (
        <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
        <table className=' font-philosopher table-auto md:table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className="text-xs text-gray-700  bg-white dark:bg-gray-700 dark:text-gray-400">
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
          


          < tr className='text-center   border text-xs text-gray-700  bg-white dark:bg-gray-700 dark:text-gray-400 '>
          <td className='border py-5 px-3' >{grossIncomeYearly}</td>
          <td className='border py-5 px-3'>{childrenNumber}</td>
          <td className='border py-5 px-3'> {propertyOwnership}</td>
          <td className='border py-5 px-3'>{maritalStatus}</td>
          </tr>

          < tr className=' text-center border text-xs text-gray-700  bg-white dark:bg-gray-700 dark:text-gray-400 '>
          <td className='border  py-5 px-3'>{tax20percent}</td>

          <td className='border py-5 px-3 '>
         {childrenTaxReduction}</td>
          <td className='border py-5 px-3'>{propertyOwnershipTaxReduction}</td>
          <td className='border py-5 px-3'> {maritalStatusTaxReduction}</td>
          </tr>

          <tr className=' text-center border text-xs text-gray-700 bg-white dark:bg-gray-700 dark:text-gray-400 '>
                <td className='border py-5 px-2'>
                Yearly:<br />{totalTax.toFixed(2)} $
                </td>
                <td className='border h-auto py-5 px-2'>
                Monthly:<br /> {(totalTax / 12).toFixed(2)} $
                </td>
                <td className='border h-auto py-5 px-2'>
                Fortnightly:<br /> {((totalTax / 12)/2).toFixed(2)} $
                </td>
                <td className='border h-auto py-5 px-2'>
                Weekly:<br /> {((totalTax / 12)/4).toFixed(2)} $
                </td>
              </tr>
          </tbody>    
        </table>
           

          <div className='px-3 flex-col text-center justify-center align-center bg-white min-h-full'>
            <h3 className='text-center font-philosopher text-red-700 bg-white py-6 border-b'>
            
              Your effective tax rate is {effectiveTaxRate}% and yearly you owe exactly {(totalTax).toFixed(2)}$... you
              have {(totalIncomeAfterTax).toFixed(2)}$ left to plan your funeral with.
            </h3>
            
            <MainButton onclick={refreshPage} buttontext='Calculate again' />
          </div>
        </div>
      )}
    </div>
  )
}