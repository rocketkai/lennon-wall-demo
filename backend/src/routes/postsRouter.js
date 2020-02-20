import express from 'express';
import { Post, Wall } from '../db/models';

const router = express.Router();

router.post('/create', async (req, res) => {
  const newPost = await Post.create({
    value: req.body.value
  });
  const associatedWall = await Wall.findByPk(req.body.wallId);
  await newPost.setWall(associatedWall);
  res.send(newPost);
})

router.get('/retrieve', async (req, res) => {
  const posts = await Post.findAll();
  const firstPost = posts[1];
  // console.log(firstPost);
  const firstWall = await firstPost.getWall();
  console.log(firstWall);
  res.send(posts);
});

export default router
