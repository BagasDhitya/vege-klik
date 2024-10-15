"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const vegetable_controller_1 = require("../controllers/vegetable.controller");
const router = express_1.default.Router();
const vegetableController = new vegetable_controller_1.VegetableController();
router.get('/', (req, res) => vegetableController.getAllVegetables(req, res));
router.post('/', (req, res) => vegetableController.createVegetable(req, res));
router.put('/:id', (req, res) => vegetableController.updateVegetable(req, res));
router.delete('/:id', (req, res) => vegetableController.deleteVegetable(req, res));
exports.default = router;
