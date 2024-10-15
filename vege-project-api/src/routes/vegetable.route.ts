import express from 'express';
import { VegetableController } from '../controllers/vegetable.controller';

const router = express.Router();
const vegetableController = new VegetableController();

router.get('/', (req, res) => vegetableController.getAllVegetables(req, res));
router.post('/', (req, res) => vegetableController.createVegetable(req, res));
router.put('/:id', (req, res) => vegetableController.updateVegetable(req, res));
router.delete('/:id', (req, res) => vegetableController.deleteVegetable(req, res));

export default router;
