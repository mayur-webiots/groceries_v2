'use server'
import db from "@/db/db";
import { revalidatePath } from "next/cache";

export async function addToList(product:any){
const productExists = await db.groceryList.findFirst({where:{productId:product.id}})
if(productExists){
    await db.groceryList.updateMany({where:{productId:product.id},data:{quantity:productExists.quantity+1,itemTaken:false}})
}else{
    await db.groceryList.create({
        data:{
            productId:product.id,
            quantity:1
        }
    })
}
revalidatePath('/')
}

export async function removeFromList(product:any){
const productExists = await db.groceryList.findMany({where:{productId:product.id}})
if(productExists){
    await db.groceryList.deleteMany({where:{productId:product.id}})
}else{
    console.log('no such product exists')
}
revalidatePath('/')
}

export async function minusFromList(product:any){
const productExists = await db.groceryList.findFirst({where:{productId:product.id}})
if(productExists){
    if(productExists.quantity ==1){
        await removeFromList(product);
    }else{
        await db.groceryList.updateMany({where:{productId:product.id},data:{quantity:productExists.quantity-1,itemTaken:false}})
    }
}else{
    console.log('no such product exists')
}
revalidatePath('/')
}

export async function getList(){
    const groceryList = await db.groceryList.findMany({
        select:{
            id:true,
            product:true,
            quantity:true,
            productId:true,
            itemTaken:true
        },
        orderBy:{productId:'asc'}
    })
    return groceryList
}

export async function toggleItemTaken({item,currentPath}:any){
    const groceryItem = await db.groceryList.findFirst({where:{id:item.id}});
    if(groceryItem){
        await db.groceryList.update({where:{id:item.id},data:{itemTaken:groceryItem.itemTaken?false:true}});
    }else{
    }
    revalidatePath(currentPath)
}