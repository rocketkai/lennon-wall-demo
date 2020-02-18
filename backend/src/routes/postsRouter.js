import express from 'express';
import { Post } from '../db/models';

const router = express.Router();

router.post('/create', async (req, res) => {
  const newPost = await Post.create({
    value: req.body.value
  });
  res.send(newPost);
})

router.get('/retrieve', async (req, res) => {
  const posts = await Post.findAll();
  res.send(posts);
});

export default router
