'use client'
import { clearGroceryList } from '@/app/_actions/list'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function ClearListButton() {
    return (
        <Button onClick={() => clearGroceryList({currentPath:'/'})} className='float-end p-1 text-xs bg-red-400'>
            Clear list
        </Button>
    )
}
