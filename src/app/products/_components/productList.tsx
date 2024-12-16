import ClearListButton from './clearListButton';
import List from './list'
import {  getList } from '@/app/_actions/list'
export default async function ProductList() {
    let groceryList = await getList();
    return (
        <>

            <div className="w-1/2 m-3">
                <div className="heading flex justify-between">
                    <div>
                        Grocery List
                    </div>
                    <ClearListButton/>

                </div>

                {groceryList.length ?
                    <ul className=" divide-y divide-gray-200 dark:divide-gray-700">
                        {groceryList.map(item => {
                            return <List item={item} key={item.id}></List>

                        })}
                    </ul>
                    :
                    <div>
                        No Products in List
                    </div>
                }
            </div>
        </>
    )
}
