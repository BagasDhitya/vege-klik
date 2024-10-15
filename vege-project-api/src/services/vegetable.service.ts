import { pool } from "../config/database";

export interface Vegetable {
  id?: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  image_url: string;
}

export class VegetableService {
  async getAllVegetables() {
    const result = await pool.query("SELECT * FROM vegetables");
    return result.rows;
  }

  async createVegetable(vegetable: Vegetable) {
    const { name, category, price, stock, description, image_url } = vegetable;
    const result = await pool.query(
      "INSERT INTO vegetables (name, category, price, stock, description, image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, category, price, stock, description, image_url]
    );
    return result.rows[0];
  }

  async updateVegetable(id: number, vegetable: Vegetable) {
    const { name, category, price, stock, description, image_url } = vegetable;
    const result = await pool.query(
      "UPDATE vegetables SET name = $1, category = $2, price = $3, stock = $4, description = $5, image_url = $6 WHERE id = $7 RETURNING *",
      [name, category, price, stock, description, image_url, id]
    );
    return result.rows[0];
  }

  async deleteVegetable(id: number) {
    await pool.query("DELETE FROM vegetables WHERE id = $1", [id]);
  }
}
