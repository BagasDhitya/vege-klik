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
exports.VegetableService = void 0;
const database_1 = require("../config/database");
class VegetableService {
    getAllVegetables() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.pool.query("SELECT * FROM vegetables");
            return result.rows;
        });
    }
    createVegetable(vegetable) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, category, price, stock, description, image_url } = vegetable;
            const result = yield database_1.pool.query("INSERT INTO vegetables (name, category, price, stock, description, image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *", [name, category, price, stock, description, image_url]);
            return result.rows[0];
        });
    }
    updateVegetable(id, vegetable) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, category, price, stock, description, image_url } = vegetable;
            const result = yield database_1.pool.query("UPDATE vegetables SET name = $1, category = $2, price = $3, stock = $4, description = $5, image_url = $6 WHERE id = $7 RETURNING *", [name, category, price, stock, description, image_url, id]);
            return result.rows[0];
        });
    }
    deleteVegetable(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.query("DELETE FROM vegetables WHERE id = $1", [id]);
        });
    }
}
exports.VegetableService = VegetableService;
