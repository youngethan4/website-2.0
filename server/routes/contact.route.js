import express from "express";
import contactController from "../controllers/contact.controller.js";
const contact = express.Router();

contact.post("/", contactController.saveMessage);

export default contact;
