import express from 'express';
import { Wall } from '../db/models';

const router = express.Router();

router.post('/create', async (req, res) => {
  const newWall = await Wall.create({
    name: req.body.name
  });
  res.send(newWall);
})

export default router
