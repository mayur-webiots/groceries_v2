import React from 'react'
import { addCategory } from '../_actions/categories'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import CategoryTable from './_components/categoryTable'

export default function Categories() {
    return (
        <div>
            <div className="form">
                <form action={addCategory} className="form  p-5">
                    <div className='flex justify-between' >
                        <div className="input w-3/4 mx-2">
                        <Input type="text" placeholder='Enter Category' id='category' name='category' />
                        </div>
                        <div className="button ">
                            <Button type='submit' className='bg-lime-500' >Submit</Button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="category-table">
                <CategoryTable />
            </div>
        </div>
    )
}
