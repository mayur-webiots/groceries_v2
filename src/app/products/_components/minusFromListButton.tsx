'use client'
import React from 'react'
import {minusFromList } from '@/app/_actions/list'

export default function MinusFromListButton({item}:any) {
    return (
        <button onClick={()=>minusFromList(item.product)} className="px-2 bg-white  hover:bg-gray-100  border border-gray-400 rounded shadow">
            -
        </button>
    )
}
