import React from 'react'
import { MainButton } from '../Components/index'



export default function CreateTable(props){
  
  let{handleSubmit,
    setGrossIncomeYearly,
    setChildrenNumber,
    setPropertyOwnership,
    setMaritalStatus,
    setTax20Percent} = props.newData;



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
              <th  className="py-3 px-6"  >
                  Marital status
              </th>
            </tr>

          </thead>

          <tbody >
          


          < tr className=' border text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 '>
          <td className='border  py-3 px-6' ><a className='float-right'></a></td>
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
        <form  onSubmit={handleSubmit} >< MainButton buttontext = "See results"  />
        </form>
    </div>
  )
}
