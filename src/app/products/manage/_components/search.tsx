'use client'
import React from 'react'

export default function SearchBox({allProducts,items}:any) {
    const handleSearch = (e:any)=>{
        let newList = allProducts.filter((product:any)=>product.name.toLowerCase().includes(e.target.value.toLowerCase()))
        items.products = newList 
    }
    return (
        <div>
            <input onChange={e=>handleSearch(e)} type="search" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
        </div>
    )
}
