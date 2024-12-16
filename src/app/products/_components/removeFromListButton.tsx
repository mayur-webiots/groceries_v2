'use client'
import React from 'react'
import {removeFromList } from '@/app/_actions/list'

export default function RemoveFromListButton({item}:any) {
    return (
        <button onClick={()=>removeFromList(item.product)} className="bg-red-200  hover:bg-gray-100 px-1 border border-gray-400 rounded shadow">
            remove
        </button>
    )
}
