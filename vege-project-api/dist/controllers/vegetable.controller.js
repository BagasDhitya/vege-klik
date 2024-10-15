"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VegetableController = void 0;
const vegetable_service_1 = require("../services/vegetable.service");
class VegetableController {
    constructor() {
        this.vegetableService = new vegetable_service_1.VegetableService();
    }
    getAllVegetables(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vegetables = yield this.vegetableService.getAllVegetables();
                res.json(vegetables);
            }
            catch (error) {
                res.status(500).json({ message: "Error fetching vegetables", error });
            }
        });
    }
    createVegetable(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, category, price, stock, description, image_url } = req.body;
                const newVegetable = yield this.vegetableService.createVegetable({
                    name,
                    category,
                    price,
                    stock,
                    description,
                    image_url,
                });
                res.status(201).json(newVegetable);
            }
            catch (error) {
                res.status(500).json({ message: "Error creating vegetable", error });
            }
        });
    }
    updateVegetable(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const { name, category, price, stock, description, image_url } = req.body;
                const updatedVegetable = yield this.vegetableService.updateVegetable(id, {
                    name,
                    category,
                    price,
                    stock,
                    description,
                    image_url,
                });
                res.json(updatedVegetable);
            }
            catch (error) {
                res.status(500).json({ message: "Error updating vegetable", error });
            }
        });
    }
    deleteVegetable(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                yield this.vegetableService.deleteVegetable(id);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: "Error deleting vegetable", error });
            }
        });
    }
}
exports.VegetableController = VegetableController;
