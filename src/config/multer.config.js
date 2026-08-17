import multer from 'multer';
import crypto from 'crypto'
import path from "node:path"
import { UPLOADS_FILE_RULES } from '../shared/constants/uploads-rules.js';


const uploadedPath=path.join(process.cwd(),"src","uploads")

//distination and filename--->
const destAndFileName={
    destination:(req,file,cb)=>{
    
       cb(null,uploadedPath)
    },
    filename:(req,file,cb)=>{
         
         const extension=path.extname(file.originalname)
         const filename=`${crypto.randomUUID()}${extension}`
         cb(null,filename)
    }
}

//storage -->
const storage=multer.diskStorage(destAndFileName)

//multer config--->

export const uploads=multer({
    storage,
    limits:{
        fileSize:UPLOADS_FILE_RULES.fileSizeLimit
    }
})
