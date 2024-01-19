import { db } from "@/db/db";
import { posts } from "@/db/schema";
import { errorHandlerCallback, successHandlerCallback } from "@/lib/api-utils";
import { NextApiRequest, NextApiResponse } from "next";

export type HTTP_METHOD='GET'|'PUT'|'POST'|'DELETE'
export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const method=req.method as HTTP_METHOD
switch (method) {
    case 'GET':
      return (await GET(req,res)) 
      case 'POST':
        return  await POST(req,res)
        case 'PUT':
          return  PUT(req,res)
    case 'DELETE':
      return  DELETE(req,res)

    default:
        return res.status(405).end()
    }
}


export async function GET(req:NextApiRequest,res:NextApiResponse){
    try {
        
        return await successHandlerCallback(req,res,{message:'Get response'})
    } catch (error) {
        return await errorHandlerCallback(req,res,{message:'Get response'})
        
    }
}
export async function POST(req:NextApiRequest,res:NextApiResponse){
  try {
    const bodyData=req.body(); 
    const insert=await db.insert(posts).values({
      userId:1,title:'Post title',content:'POST content goes here',slug:'post-title-1'
    })
        const data=await db.select().from(posts)
    return await successHandlerCallback(req,res,{message:'Post created successfully',data:{data,insert}})
} catch (error) {
    return await errorHandlerCallback(req,res,{message:'An error occured'})
    
}
}
export function PUT(req:NextApiRequest,res:NextApiResponse){

}
export function DELETE(req:NextApiRequest,res:NextApiResponse){

}