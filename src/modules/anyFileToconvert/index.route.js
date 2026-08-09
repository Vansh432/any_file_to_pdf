import {Router} from 'express'
import { validatesBody } from '../../middlewares/validation.middleware.js';
import { validationConvertFile } from '../../shared/validations/validationConvertFile.js';
import { uploadFilesMiddleware } from '../../middlewares/uploads.middleware.js';
import * as convertFile from './index.controller.js' 

const routes=Router();


routes.post('/file',validatesBody(validationConvertFile),uploadFilesMiddleware,convertFile.convertFile)

export default routes