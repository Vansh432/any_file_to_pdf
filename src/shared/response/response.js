
// success response-->
export const sendSuccess=(res,{statusCode=200,status=true,message="",result={}})=>{
    const responseObj={status,message}
    if(Object.keys(result).length!=0)responseObj["result"]=result
    return res.status(statusCode).json(responseObj)
}

// error response-->
export const sendError=(res,{statusCode=500,status=false,message="Internal Server Error",stack=""})=>{
     const responseObj={status,message}
     if(stack.length!=0 )responseObj["stack"]=stack
    return res.status(statusCode).json(responseObj)
}