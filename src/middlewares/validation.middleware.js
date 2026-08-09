import { asyncHandler } from "../shared/utils/asyncHandler.js";
import { validationConvertFile } from "../shared/validations/validationConvertFile.js";

export const validatesBody=(schema)=>(asyncHandler((req,res,next)=>{
                req.body=schema.parse(req?.body)
                next();
}))