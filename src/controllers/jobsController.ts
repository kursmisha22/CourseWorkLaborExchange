/** @format */

import { Request, Response } from "express";
import { Jobs } from "../models/models";

class JobsCreate {
  async create(req: Request, res: Response) {
    try {
      const {
        userId,
        jobcategoriesId,
        name,
        description,
        salary,
        number,
        data,
      } = req.body;
      const create = await Jobs.create({
        userId,
        jobcategoriesId,
        name,
        description,
        salary,
        number,
        data,
      });
      res.status(200).json(create);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const all = await Jobs.findAll();
      res.status(200).json(all);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.query.id;
      const one = await Jobs.findOne({
        where: { jobcategoriesId: id },
      });
      res.status(200).json(one);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.query.id;
      await Jobs.destroy({ where: { id: id } });
      res.status(200).json({ messege: "Модель удалена" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
}

export default new JobsCreate();
