import multer from 'multer';
import crypto from 'crypto'
import path from "node:path"
import { uploadsFilesRules } from '../shared/constants/uploads-rules.js';


const uploadedPath=path.join(process.cwd(),"uploads","temp")

//distination and filename--->
const destAndFileName={
    destination:(req,file,cb)=>{
       cb(null,uploadedPath)
    },
    fileName:(req,file,cb)=>{
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
        fileSize:uploadsFilesRules.fileSizeLimit
    }
})
