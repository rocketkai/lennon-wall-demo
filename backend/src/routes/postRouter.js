import express from "express";

import { createPost, retrievePosts } from "../controllers/postController";

const router = express.Router();

router.post("/create", async (req, res) => createPost(req, res));

router.get("/retrieve", async (req, res) => retrievePosts(req, res));

export default router;
