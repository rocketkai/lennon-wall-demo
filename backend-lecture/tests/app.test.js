import request from "supertest";
import app from "../src/app";
import models from "../src/db/models";

afterEach(async () => {
  await models.Wall.destroy({ where: {} });
});

afterAll(() => {
  models.sequelize.close();
});

describe("wall tests", () => {
  test("create wall API creates new wall", async () => {
    // Create wall
    const response = await request(app)
      .post("/walls/create")
      .send({ name: "My Test Wall" })
      .set("Accept", "application/json");
    // Assert that the reponse contains the new post
    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe("My Test Wall");
  });
});
