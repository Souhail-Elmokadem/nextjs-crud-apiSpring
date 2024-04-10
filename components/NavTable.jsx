
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const NavTable = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];
    const router = useRouter();
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    
   

    return (
        <>

            <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between  m-5" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">{parseInt(currentPage) + 1 } - {Math.ceil(totalItems / itemsPerPage)} </span>pages of <span className="font-semibold text-gray-900 dark:text-white">{totalItems} </span>items</span>
                <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    <li>
                        <Link href="" onClick={() => paginate(currentPage - 1)} className={`flex items-center ${currentPage == 0?'pointer-events-none opacity-50':''} justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>Previous</Link>
                    </li>
                    {pageNumbers.map((number) => (
                        <li key={number}>
                            <Link href={`?page=${number-1}`} onClick={() => paginate(number-1)}
                                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 ${currentPage === number
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                                    }`}
                            >{number}</Link>
                        </li>
                    ))}


                    <li>
                        <Link href="" onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === Math.ceil(totalItems / itemsPerPage)} // TOTAL PAGES 
                            className={`flex items-center justify-center px-3 h-8 leading-tight ${currentPage ==  Math.ceil(totalItems / itemsPerPage)-1?'pointer-events-none opacity-50':''}
                            text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 
                            hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 
                            dark:hover:bg-gray-700 dark:hover:text-white`}>Next</Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}
