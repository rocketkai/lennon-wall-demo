import { Wall } from "../db/models";

export const createWall = async (req, res) => {
  const newWall = await Wall.create({
    name: req.body.name
  });
  res.send(newWall);
};
