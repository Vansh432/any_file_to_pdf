import { uploads } from "../config/multer.config"
import { uploadsFilesRules } from "../shared/constants/uploads-rules.js"



export const uploadFilesMiddleware=async(req,res,next)=>{
    uploads.array('files',uploadsFilesRules.fileCountLimit || 1)
    
}