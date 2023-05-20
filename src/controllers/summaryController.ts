/** @format */

import { Request, Response } from "express";
import { Summary } from "../models/models";

class SummaryCreate {
  async create(req: Request, res: Response) {
    try {
      const { userId, name, description, experience, number } = req.body;
      const create = await Summary.create({
        userId,
        name,
        description,
        experience,
        number,
      });
      res.status(200).json(create);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const all = await Summary.findAll();
      res.status(200).json(all);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const onereview = await Summary.findOne({
        where: { userId: id },
      });
      res.status(200).json(onereview);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Summary.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new SummaryCreate();
