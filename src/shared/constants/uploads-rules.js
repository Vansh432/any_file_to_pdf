
export const uploadsFilesRules={
    allowedFileType:[
        "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/avif"
    ],
    fileSizeLimit:15 * 1024 * 1024, //15MB
    checkSignature:true
}