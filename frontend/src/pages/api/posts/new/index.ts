import { db } from "@/db/db";
import { posts } from "@/db/schema";
import { errorHandlerCallback, successHandlerCallback } from "@/lib/api-utils";
import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios'

const COPYLEAKS_API_KEY = '0948BCEF449DEAA472998CF66CF9BDB21499D403F291825A4A1F3FF45F44720E';
const POST_UNIQUE_ID = 'studentid123-submissionid456'
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

   
    const { title, content } = req.body;

    
    const copyleaksData = {
      text: content,
    };

    const copyleaksOptions = {
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${COPYLEAKS_API_KEY}`,
      },
    };

    
    const copyleaksResponse = await axios.post(`https://api.copyleaks.com/v2/writer-detector/${POST_UNIQUE_ID}/check`, copyleaksData, copyleaksOptions);

    console.log(copyleaksResponse)
    const isAIGenerated = copyleaksResponse.data.results.some((result: any) => result.classification === 2);

    if (isAIGenerated) {
      console.log('AI GENERATED')
      return await successHandlerCallback(req, res, { message: 'Content identified as AI Generated. Not saved to the database.' });
    }

    return await successHandlerCallback(req, res, { message: 'Post created successfully' });





    // const bodyData=req.body(); 
    // const insert=await db.insert(posts).values({
    //   userId:1,title:'Post title',content:'POST content goes here',slug:'post-title-1'
    // })
    //     const data=await db.select().from(posts)
    // return await successHandlerCallback(req,res,{message:'Post created successfully',data:{data,insert}})
} catch (error: any) {
  console.log(error)
      return await errorHandlerCallback(req,res,{message:'An error occured'})
    
}
}
export function PUT(req:NextApiRequest,res:NextApiResponse){

}
export function DELETE(req:NextApiRequest,res:NextApiResponse){

}