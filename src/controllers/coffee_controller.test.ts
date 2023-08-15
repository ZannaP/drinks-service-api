import request from "supertest";
import { app } from "../app";
describe("GET /coffee should return correct object", () => {
  test("GET /coffee should return Latte by default", async () => {
    const res = await request(app).get("/coffee");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Coffee",
      name: "Latte",
    });
  });
  test("GET /coffee should return name from parameter", async () => {
    const res = await request(app)
      .get("/coffee")
      .query({ coffeeName: "Decaf" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Coffee",
      name: "Decaf",
    });
  });
  test("GET /coffee should return name from parameter", async () => {
    const res = await request(app).get("/coffee?coffeeName=Espresso");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Coffee",
      name: "Espresso",
    });
  });
});
