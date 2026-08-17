
import {AppError} from '../errors/appError.js'
import {fileTypeFromFile} from 'file-type'


export const validateFiles=async(files=[],rules)=>{

   if(!files || files.length==0)throw new AppError("Files not found",404);

   if(files.length>rules.fileCountLimit) throw new AppError(`File count is not greater than ${rules.fileCountLimit || 0}`)
   //check file validations--->
   for(let e of files){
    //size
    if(e?.size>rules.fileSizeLimit){
        throw new AppError(`${e?.filename} File size must not exceed ${rules?.fileSizeLimit}`)
    }
   
    //file type
    if(!rules.allowedFileType.includes(e.mimetype)){
           throw new AppError(`${e?.filename} file is not allowed`,400)
    }
    
    //check file formate binary formate-->
    if(rules.checkSignature){
        
        const detectedType=await fileTypeFromFile(e.path)

        if(!detectedType)throw new AppError(`Invalid file ${e?.filename}`,400)
      
        if(detectedType?.mime!==e?.mimetype)throw new AppError("File content does not match its declared file type",400);

    }
    
   }

   return true;
}