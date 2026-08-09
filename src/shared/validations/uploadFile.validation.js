
import {AppError} from '../errors/appError.js'
import {fileTypeFromFile} from 'file-type'


export const validateFiles=(files=[],rules)=>{
   if(!files || files.length==0)throw new AppError("Files not found",404);

   //check file validations--->
   for(let e in files){
    //size
    if(e?.size>rules.fileSizeLimit){
        throw new AppError(`${e.fileName} File size must not exceed ${rules.fileSizeLimit}`)
    }
     
    //file type
    if(!rules.allowedFileType.include(e.mimetype)){
           throw new AppError(`${e.fileName} file is not allowed`,400)
    }
    
    //check file formate binary formate-->
    if(rules.checkSignature){
        
        const detectedType=fileTypeFromFile(e.path)

        if(!detectedType)throw new AppError(`Invalid file ${e.fileName}`,400)

        if(detectedType.mime!==e.mimetype)throw new AppError("File content does not match its declared file type",400);

    }
    
   }

   return true;
}