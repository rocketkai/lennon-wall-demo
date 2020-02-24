// import { createPost, retrievePosts } from '../controllers/postController'
import request from "supertest";
import app from "../src/app";
import models from "../src/db/models";

test("creates new post", async () => {
  const response = await request(app)
    .post("/posts/create")
    .send({ value: "test post" })
    .set("Accept", "application/json");
  expect(response.statusCode).toBe(200);
  expect(response.body.value).toBe("test post");
  models.sequelize.close();
});
