import { Router } from 'express'
import { workshopsController } from '../controllers/workshops.controller'
import verifyJWT from '../utils/verifyJWT'

const router = Router()

router.get('/',verifyJWT, workshopsController.getAll)
router.post('/', workshopsController.create)
router.delete('/:id', workshopsController.delete)
router.put('/:id', workshopsController.update)
router.get('/:id', workshopsController.getOne)
router.post('/login', workshopsController.login)

export { router }
