"use client"
import React, { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function ProductList() {
    const [ListOpen,setListOpen] = useState(true)
    const HandleOpenList = () => {
        setListOpen(()=>!ListOpen)
    }
    return (
        <>
            {ListOpen && <div className='rounded-lg bg-slate-50 dark:bg-slate-800 shadow-md duration-300 h-100 w-52 bottom-20 right-5 !fixed'>
                <div className='p-2'>
                Grocery list

                </div>
            </div>}
            <div className='flex justify-center items-center bg-black text-white h-10 w-10 !fixed bottom-5 right-5 rounded-full' onClick={HandleOpenList}><FaArrowUp /> </div>

        </>
    )
}
