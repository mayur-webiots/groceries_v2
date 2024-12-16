'use client'
import React from 'react'
import { addToList } from '@/app/_actions/list'

export default function AddToListButton({item}:any) {
    return (
        <button onClick={()=>addToList(item.product)} className="px-2 bg-white hover:bg-gray-100  border border-gray-400 rounded shadow">
            +
        </button>
    )
}
