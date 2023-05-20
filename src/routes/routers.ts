/** @format */

import { Router } from "express";
import UserController from "../controllers/userController";
import News from "../controllers/newsController";
import JobsCreate from "../controllers/jobsController";
import JobCategoriesCreate from "../controllers/jobCategoriesController";
import SummaryCreate from "../controllers/summaryController";
import auth from "../middleware/authMiddleware";
import role from "../middleware/roleMiddleware";

const router = Router();

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.get("/check", auth, UserController.check);

router.post("/createNews", role, News.create);
router.get("/getAllNews", News.getAll);
router.delete("/deleteNews", role, News.delete);

router.post("/createJobs", JobsCreate.create);
router.get("/getAllJobs", JobsCreate.getAll);
router.get("/geOneJobs", JobsCreate.getOne);
router.delete("/deleteJobs", JobsCreate.delete);

router.post("/createJobsCategories", JobCategoriesCreate.create);
router.get("/getAllJobsCategories", JobCategoriesCreate.getAll);
router.delete("/deleteJobsCategories", JobCategoriesCreate.delete);

router.post("/createSummary", SummaryCreate.create);
router.get("/getAllSummary", SummaryCreate.getAll);
router.get("/geOneSummary", SummaryCreate.getOne);
router.delete("/deleteSummary", SummaryCreate.delete);

export default router;
