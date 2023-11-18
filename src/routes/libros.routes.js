import { Router } from 'express'
import {getLibros, createLibros, getLibro, deleteLibro, updateLibro} from '../controllers/libros.controllers.js'

const router = Router()

router.get('/libros', getLibros)

router.post('/libros', createLibros)

router.get('/libros/:idLibro', getLibro)

router.delete('/libros/:idLibro', deleteLibro)

router.patch('/libros/:idLibro', updateLibro)


export default router