'use client'
import React, { useEffect, useState } from 'react'
import Card from './product_card'

export default function AllProducts({ allProducts }: any) {
    const [products,setProducts] = useState(allProducts)
    const [searchValue,setSearchValue] = useState('');
    useEffect(()=>{
        setProducts(()=> allProducts.filter((product: any) => product.name.toLowerCase().includes(searchValue)));
    },[searchValue  ])
   
    return (
            <div className='w-1/2 m-3'>
                <div className="heading">
                    Products List
                </div>
                <div>
                    <input onChange={(e:any) => {setSearchValue(e.target.value)}} type="search" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                </div>
                <div>
                    {products.map((product: any) =>
                        <Card product={product} key={product.id}></Card>

                    )}

                </div>
            </div>
           
    )
}
