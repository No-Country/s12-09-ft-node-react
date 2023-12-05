import { Router } from 'express'
import { BudgetController } from '../controllers/budget.controller'

const router = Router()

router.get('/', BudgetController.getAllBudget)
router.post('/', BudgetController.createBudget)
router.delete('/:id', BudgetController.deleteBudgetById)
// router.put('/:id', BudgetController.update)
// router.get('/:id', BudgetController.getOne)

export { router }
