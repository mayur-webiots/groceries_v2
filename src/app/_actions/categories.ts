'use server'

import db from "@/db/db"
import { revalidatePath } from "next/cache";

export async function addCategory(formData:FormData){
    const data:any = {};
    formData.forEach((value,key)=>data[key]=value)
    const categoryCreated = await db.category.create({data:{
        name:String(data.category),

    }})
    revalidatePath('/','layout')
}

export async function getCategories(){
    const allCategories = await db.category.findMany({select:{
        id:true,
        name:true,
        productList:true,
        priority:true
    },orderBy:{priority:'asc'}})
    return allCategories
}

export async function deleteCategory(id:string){
    const category = await db.category.delete({where:{id:id}})
    revalidatePath('/','layout')

}