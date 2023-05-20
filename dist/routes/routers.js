"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController_1 = __importDefault(require("../controllers/userController"));
var newsController_1 = __importDefault(require("../controllers/newsController"));
var jobsController_1 = __importDefault(require("../controllers/jobsController"));
var jobCategoriesController_1 = __importDefault(require("../controllers/jobCategoriesController"));
var summaryController_1 = __importDefault(require("../controllers/summaryController"));
var authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
var roleMiddleware_1 = __importDefault(require("../middleware/roleMiddleware"));
var router = (0, express_1.Router)();
router.post("/registration", userController_1.default.registration);
router.post("/login", userController_1.default.login);
router.get("/check", authMiddleware_1.default, userController_1.default.check);
router.post("/createNews", roleMiddleware_1.default, newsController_1.default.create);
router.get("/getAllNews", newsController_1.default.getAll);
router.delete("/deleteNews", roleMiddleware_1.default, newsController_1.default.delete);
router.post("/createJobs", jobsController_1.default.create);
router.get("/getAllJobs", jobsController_1.default.getAll);
router.get("/geOneJobs", jobsController_1.default.getOne);
router.delete("/deleteJobs", jobsController_1.default.delete);
router.post("/createJobsCategories", jobCategoriesController_1.default.create);
router.get("/getAllJobsCategories", jobCategoriesController_1.default.getAll);
router.delete("/deleteJobsCategories", jobCategoriesController_1.default.delete);
router.post("/createSummary", summaryController_1.default.create);
router.get("/getAllSummary", summaryController_1.default.getAll);
router.get("/geOneSummary", summaryController_1.default.getOne);
router.delete("/deleteSummary", summaryController_1.default.delete);
exports.default = router;
