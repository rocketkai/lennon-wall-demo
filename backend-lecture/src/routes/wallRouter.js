import express from "express";
import { createWall } from "../controllers/wallController";
import { Wall } from "../db/models";

const router = express.Router();

// Create wall and send it back in response
router.post("/create", (req, res) => createWall(req, res));

// Retrieve wall
router.get("/retrieve", async (req, res) => {
  const wall = await Wall.findOne({
    where: {
      name: req.query.wallName
    }
  });
  res.send(wall);
});

// lw.com/walls/<wall_name>

export default router;
