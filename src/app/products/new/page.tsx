import { getCategories } from '@/app/_actions/categories';
import { addProduct } from '@/app/_actions/products'
import { getStores } from '@/app/_actions/store';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default async function NewProduct() {
    const allStores = await getStores();
    const allCategories = await getCategories();
    return (
        <div >
            <form action={addProduct} className="form  p-5">
                <div className="input mt-3">
                    <Label  htmlFor='product'>Product Name</Label>
                    <Input type="text" id='product' name='product' />
                </div>
                <div className="input mt-3">
                    <Label  htmlFor='price'>Price</Label>
                    <Input type="number" id='price' name='price' />
                </div>
                <div className="input mt-3">
                    <Label  htmlFor='cateogry'>Category</Label>
                    <select name="category" id="category" className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-50 focus:border-slate-50 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' >
                    {allCategories.map((category)=>{
                        return <option key={category.id}  value={category.id}>{category.name}</option>
                    })}
                    </select>
                </div>
                <div className="input mt-3">
                    <Label  htmlFor='store'>Store</Label>
                    <select name="store" id="store" className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-50 focus:border-slate-50 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' >
                    {allStores.map((store)=>{
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
