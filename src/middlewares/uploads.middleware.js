import { uploads } from "../config/multer.config.js"
import { UPLOADS_FILE_RULES } from "../shared/constants/uploads-rules.js"
import { asyncHandler } from "../shared/utils/asyncHandler.js"
import {validateFiles} from '../shared/validations/uploadFile.validation.js'


export const uploadFilesMiddleware=[uploads.array('files',UPLOADS_FILE_RULES.fileCountLimit || 1),asyncHandler((req,res,next)=>{
        validateFiles(req.files=[],UPLOADS_FILE_RULES)
        next()
})]