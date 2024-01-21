import { db } from "@/db/db";
import { posts } from "@/db/schema";
import { errorHandlerCallback, successHandlerCallback } from "@/lib/api-utils";
import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
// const {COPYLEAKS_API_KEY} = process.env;

const COPYLEAKS_API_KEY = 'FB5193C14CCA4CEF07A4279F1675072FF557E487914FB4BC959230C88E0081C1'

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

   
    const {content,status,...rest } = req.body;

    
    const copyleaksData = {
      text: content,
    };

    const copyleaksOptions = {
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${COPYLEAKS_API_KEY}`,
      },
    };

    if(status==='DRAFT'){
      await db.insert(posts).values({...rest,content})
      return await successHandlerCallback(req,res,{message:'Draft saved successfully'})
   
    }
    const copyleaksResponse = await axios.post(`https://api.copyleaks.com/v2/writer-detector/${POST_UNIQUE_ID}/check`, copyleaksData, copyleaksOptions);

    console.log(copyleaksResponse)
    const isAIGenerated = copyleaksResponse.data.results.some((result: any) => result.classification === 2);

    if (isAIGenerated) {
      console.log('AI GENERATED')
      return await successHandlerCallback(req, res, { message: 'Content identified as AI Generated. Not saved' });
    }
    const insert=await db.insert(posts).values({...rest,status,content})
    return await successHandlerCallback(req,res,{message:'Post created successfully'})

} catch (error: any) {
  console.log(error)
      return await errorHandlerCallback(req,res,{message:'An error occured'})
    
}
}
export function PUT(req:NextApiRequest,res:NextApiResponse){

}
export function DELETE(req:NextApiRequest,res:NextApiResponse){

}