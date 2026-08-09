import z from 'zod'
import { CONVER_FILE } from '../constants/convert-file.js'


export const validationConvertFile=z.object({
    convertToFile:z.enum(CONVER_FILE)
})