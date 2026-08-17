import z from 'zod'
import { CONVER_FILE } from '../constants/convert-file.js'


export const validationConvertFile=z.object({
    convertToFile:z.enum(CONVER_FILE,{
        message:`File must required this types ${CONVER_FILE.join(",")}`
    })
})