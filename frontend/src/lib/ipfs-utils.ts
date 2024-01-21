//@ts-ignore
import { Web3Storage } from 'web3.storage';

function getAccessToken() {
  return process.env.NEXT_PUBLIC_WEB3STORAGE_API_TOKEN;
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() as string});
}

export const putJSONandGetHash = async (data:any,isJson:boolean=false) => {
  const client = makeStorageClient();
  if(!isJson){
    const res = await client.put([data]);
    return res;
    
  }
  const content = new Blob([JSON.stringify(data)], {
    type: 'application/json',
  });
  const fileObj = new File([content], 'file.json', {
    type: 'application/json',
  });
  const res = await client.put([fileObj]);
  return res;
};