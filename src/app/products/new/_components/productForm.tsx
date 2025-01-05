import { addProduct } from '@/app/_actions/products'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default async function ProductForm({ allStores, allCategories }: any) {
    return (
        <div>
            <div className="p-4 mb-4 text-sm text-green-900 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-500" role="alert">
                <span className="font-medium">Success alert!</span> Change a few things up and try submitting again.
            </div>
            <form action={addProduct} className="form  p-5">
                <div className="input mt-3">
                    <Label htmlFor='product'>Product Name</Label>
                    <Input type="text" id='product' name='product' />
                </div>
                <div className="input mt-3">
                    <Label htmlFor='price'>Price</Label>
                    <Input type="number" id='price' name='price' />
                </div>
                <div className="input mt-3">
                    <Label htmlFor='cateogry'>Category</Label>
                    <select name="category" id="category" className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-50 focus:border-slate-50 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' >
                        {allCategories.map((category: any) => {
                            return <option key={category.id} value={category.id}>{category.name}</option>
                        })}
                    </select>
                </div>
                <div className="input mt-3">
                    <Label htmlFor='store'>Store</Label>
                    <select name="store" id="store" className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-50 focus:border-slate-50 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' >
                        {allStores.map((store: any) => {
                            return <option key={store.id} value={store.id}>{store.name}</option>
                        })}
                    </select>
                </div>
                <div className="button mt-4 right-0 float-end">
                    <Button type='submit' className='bg-lime-500' >Submit</Button>
                </div>


            </form>
        </div>
    )
}
