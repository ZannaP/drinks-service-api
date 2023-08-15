import request from "supertest";
import { app } from "../app";
describe("GET /tea should return correct object", () => {
  test("GET /tea should return English Breakfast with milk=cow by default", async () => {
    const res = await request(app).get("/tea");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Tea",
      name: "English Breakfast",
      milk: "cow",
    });
  });
  test("GET /tea should return name from parameter and milk=cow by default", async () => {
    const res = await request(app).get("/tea").query({ teaName: "Darjeeling" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Tea",
      name: "Darjeeling",
      milk: "cow",
    });
  });
  test("GET /tea should return name and milk from parameter", async () => {
    const res = await request(app)
      .get("/tea")
      .query({ teaName: "Green", milkOption: "goat" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Tea",
      name: "Green",
      milk: "goat",
    });
  });
});
