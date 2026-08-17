import { ZodError } from "zod";
import { asyncHandler } from "../shared/utils/asyncHandler.js";
import { sendError } from "../shared/response/response.js";

export const validatesBody = (schema) => (asyncHandler((req, res, next) => {
   
    try {
        req.body = schema.parse(req?.body)
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            const errors = error.issues.map(issue => ({
                field: issue.path.join("."),
                message: issue.message
            }));

           sendError(res,{statusCode:403,message:"Validation errors",errors})
        }
    }
}))