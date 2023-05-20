"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobCategories = exports.News = exports.Jobs = exports.Summary = exports.Basket = exports.User = void 0;
var database_1 = __importDefault(require("../database/database"));
var sequelize_1 = __importDefault(require("sequelize"));
var User = database_1.default.define("user", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: sequelize_1.default.STRING, unique: true },
    password: { type: sequelize_1.default.STRING },
    role: { type: sequelize_1.default.STRING, defaultValue: "USER" },
});
exports.User = User;
var Basket = database_1.default.define("basket", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
});
exports.Basket = Basket;
var Summary = database_1.default.define("summary", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING, allowNull: false },
    description: { type: sequelize_1.default.STRING },
    experience: { type: sequelize_1.default.INTEGER },
    number: { type: sequelize_1.default.STRING },
});
exports.Summary = Summary;
var Jobs = database_1.default.define("jobs", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING, allowNull: false },
    description: { type: sequelize_1.default.STRING },
    salary: { type: sequelize_1.default.STRING },
    number: { type: sequelize_1.default.STRING },
    data: { type: sequelize_1.default.STRING },
});
exports.Jobs = Jobs;
var News = database_1.default.define("news", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING },
    description: { type: sequelize_1.default.STRING },
});
exports.News = News;
var JobCategories = database_1.default.define("jobcategories", {
    id: { type: sequelize_1.default.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.default.STRING },
});
exports.JobCategories = JobCategories;
User.hasOne(Basket);
Basket.belongsTo(User);
User.hasMany(Summary);
Summary.belongsTo(User);
User.hasMany(Jobs);
Jobs.belongsTo(User);
JobCategories.hasMany(Jobs);
Jobs.belongsTo(JobCategories);
