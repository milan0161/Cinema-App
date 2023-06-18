import multer, { FileFilterCallback } from 'multer'
import { Request } from 'express'

const fileStorage = multer.diskStorage({
    destination:(req:Request, file:Express.Multer.File, cb):void => {
        cb(null, './public/images')
    },
    filename: (req:Request, file:Express.Multer.File, cb):void => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
    }
})

const fileFilter = (req:Request, file:Express.Multer.File, cb:FileFilterCallback):void =>{
    if(file.size > 1024 * 1024){
        cb(null, false)
    }
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        cb(null, true)
    } else {
        cb(null, false)
    }
}

export {fileFilter, fileStorage}