import { NextApiRequest, NextApiResponse } from "next"

export async function successHandlerCallback<T>(req:NextApiRequest,res:NextApiResponse,data:T):Promise<void>{
    
    return res.status(200).json(data)
    }
    export async function errorHandlerCallback<T>(req:NextApiRequest,res:NextApiResponse,data:T):Promise<void>{
        
    return res.status(500).json(data)
    }