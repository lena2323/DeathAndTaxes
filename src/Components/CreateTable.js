import React from 'react'



export default function CreateTable(props){
    return (
    <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
        <h1>{props.first}</h1>
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
              <th  className="py-3 px-6">
                  Marital status
              </th>
            </tr>

          </thead>

          <tbody >
          


          < tr className=' border text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 '>
          <td className='border  py-3 px-6'>{props.inputYearlyGrossIncome} <a className='float-right'>20% tax</a></td>
          <td className='border py-3 px-6 '>{props.inputNumberOfCHildren} <a className='float-right'>20% tax</a></td>
          <td className='border py-3 px-6'>{props.inputPropertyOwnership} <a className='float-right'>20% tax</a></td>
          <td className='border py-3 px-6'>{props.inputMaritalStatus} <a className='float-right'>20% tax</a></td>
          </tr>

          < tr className=' border text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 '>
          <td className='border  py-3 px-6'>{(parseInt(props.inputYearlyGrossIncome) >= 10000) ? "20% tax is "+(props.inputYearlyGrossIncome * 5/100) : "10% tax is "+(parseInt(props.inputYearlyGrossIncome)*10/100)}</td>

          <td className='border py-3 px-6 '>{(parseInt(props.inputNumberOfCHildren) >= 1) && ((parseInt(props.inputYearlyGrossIncome) >= 10000)) ? (parseInt(props.inputYearlyGrossIncome  * 5/100)) : (parseInt(props.inputYearlyGrossIncome)*15/100) }  
          
          <a className='float-right'>20% tax</a></td>
          <td className='border py-3 px-6'><a className='float-right'>20% tax</a></td>
          <td className='border py-3 px-6'>{props.inputYearlyGrossIncome} <a className='float-right'>20% tax</a></td>
          </tr>
          </tbody>    
        </table>
    </div>
  )
}
