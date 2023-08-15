import { Request, Response } from "express";
export const getCoffeeLover = async (req: Request, res: Response) =>
  res.send("I like coffee!");
