import express from "express";
import { createWall } from "../controllers/wallController";

const router = express.Router();

router.post("/create", async (req, res) => createWall(req, res));

export default router;
