/** @format */

import { Request, Response } from "express";
import { JobCategories } from "../models/models";

class JobCategoriesCreate {
  async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const create = await JobCategories.create({ name });
      res.status(200).json(create);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const all = await JobCategories.findAll();
      res.status(200).json(all);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await JobCategories.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new JobCategoriesCreate();
