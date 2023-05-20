/** @format */

import { Request, Response } from "express";
import { News } from "../models/models";

class NewsCreate {
  async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const create = await News.create({ name });
      res.status(200).json(create);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const all = await News.findAll();
      res.status(200).json(all);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await News.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new NewsCreate();
