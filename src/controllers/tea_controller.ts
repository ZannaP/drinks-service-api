import { Request, Response } from "express";
import * as teaService from "../services/tea_service";
export const getTea = async (
  req: Request<
    object,
    object,
    object,
    { teaName: string | undefined; milkOption: string | undefined }
  >,
  res: Response
) => {
  const teaName = req.query.teaName;
  const milkOption = req.query.milkOption;
  const tea = teaService.getTea(teaName, milkOption);
  res.json(tea).status(200);
};
