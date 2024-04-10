"use client"
import Link from 'next/link'
import DialogModel from './DialogModel';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default  function Table({data}) {

    
    return (
        <>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" style={{ minWidth: '950px' }}>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((creator, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {creator.name}
                            </th>
                            <td className="px-6 py-4">
                                {creator.email}
                            </td>
                            <td className="px-6 py-4">
                                {creator.createdAt.slice(0, 10)}
                            </td>
                            <td className="px-6 py-4">
                                {creator.password.slice(0, 6).replace(/[A-z]/g, "*").replace(/[0-9]/g, "*").replace(/[-%#@_)()]/g, "*")}
                            </td>
                            <td className="px-6 py-4">
                                <Link href={`/creators/update/${creator.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit /</Link>
                                <DialogModel creatorId={creator.id} name={creator.name} />
                            </td>

                        </tr>
                    ))}


                </tbody>
            </table>


        </>
    )
}
