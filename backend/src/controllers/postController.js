import { Post, Wall } from "../db/models";

export const createPost = async (req, res) => {
  const newPost = await Post.create({
    value: req.body.value
  });
  const associatedWall = await Wall.findByPk(req.body.wallId);
  await newPost.setWall(associatedWall);
  res.send(newPost);
};

export const retrievePosts = async (req, res) => {
  const posts = await Post.findAll();
  res.send(posts);
};
