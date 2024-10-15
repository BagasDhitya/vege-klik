import { Request, Response } from "express";
import { VegetableService } from "../services/vegetable.service";

export class VegetableController {
  private vegetableService: VegetableService;

  constructor() {
    this.vegetableService = new VegetableService();
  }

  async getAllVegetables(req: Request, res: Response) {
    try {
      const vegetables = await this.vegetableService.getAllVegetables();
      res.json(vegetables);
    } catch (error) {
      res.status(500).json({ message: "Error fetching vegetables", error });
    }
  }

  async createVegetable(req: Request, res: Response) {
    try {
      const { name, category, price, stock, description, image_url } = req.body;
      const newVegetable = await this.vegetableService.createVegetable({
        name,
        category,
        price,
        stock,
        description,
        image_url,
      });
      res.status(201).json(newVegetable);
    } catch (error) {
      res.status(500).json({ message: "Error creating vegetable", error });
    }
  }

  async updateVegetable(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const { name, category, price, stock, description, image_url } = req.body;
      const updatedVegetable = await this.vegetableService.updateVegetable(id, {
        name,
        category,
        price,
        stock,
        description,
        image_url,
      });
      res.json(updatedVegetable);
    } catch (error) {
      res.status(500).json({ message: "Error updating vegetable", error });
    }
  }

  async deleteVegetable(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await this.vegetableService.deleteVegetable(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Error deleting vegetable", error });
    }
  }
}
