import React from 'react'



export default function CreateTable(props){
    return (
    <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
        <h1>{props.first}</h1>
        <table className='table-auto md:table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="py-3 px-6">
                Yearly income
            </th>
            <th scope="col" className="py-3 px-6">
                Number of children
            </th>
            <th scope="col" className="py-3 px-6">
                Property ownership
            </th>
            <th scope="col" className="py-3 px-6">
                Marital status
            </th>
            </tr>

        </thead>

          <tbody className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          < tr className='border'>
          <td className='border py-3 px-6'>{props.inputYearlyGrossIncome}</td>
          <td className='border py-3 px-6'>F</td>
          <td className='border py-3 px-6'>F</td>
          <td className='border py-3 px-6'>S</td>

          </tr>
          < tr className='border'>
          <td className='border py-3 px-6' >S</td>
          <td className='border py-3 px-6' >F</td>
          <td className='border py-3 px-6'>F</td>
          <td className='border py-3 px-6'>S</td>

          </tr>
          < tr className='border' >
          <td className='border py-3 px-6'>S</td>
          <td className='border py-3 px-6' >F</td>
          <td className='border py-3 px-6'>F</td>
          <td className='border py-3 px-6'>S</td>
          </tr>
          </tbody>    
        </table>
    </div>
  )
}
