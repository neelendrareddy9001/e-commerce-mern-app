import express from "express";

import { cateGoryController } from "../controllers/cateGoryController";

const router = express.Router();

router.post("/create-category");

export default router;
