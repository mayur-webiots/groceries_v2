import { getCategories } from '@/app/_actions/categories';
import { getStores } from '@/app/_actions/store';
import ProductForm from './_components/productForm';

export default async function NewProduct() {
    const allStores = await getStores();
    const allCategories = await getCategories();
    return (
        <>

            <ProductForm allStores={allStores} allCategories={allCategories} />
        </>
    )
}
