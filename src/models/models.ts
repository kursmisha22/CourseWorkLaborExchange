/** @format */

import DataBase from "../database/database";
import DataTypes from "sequelize";

const User = DataBase.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = DataBase.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Summary = DataBase.define("summary", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  experience: { type: DataTypes.INTEGER },
  number: { type: DataTypes.STRING },
});

const Jobs = DataBase.define("jobs", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  salary: { type: DataTypes.STRING },
  number: { type: DataTypes.STRING },
  data: { type: DataTypes.STRING },
});

const News = DataBase.define("news", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
});

const JobCategories = DataBase.define("jobcategories", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Summary);
Summary.belongsTo(User);

User.hasMany(Jobs);
Jobs.belongsTo(User);

JobCategories.hasMany(Jobs);
Jobs.belongsTo(JobCategories);

export { User, Basket, Summary, Jobs, News, JobCategories };
