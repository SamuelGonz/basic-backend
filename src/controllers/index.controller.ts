import { Request, Response } from "express";

export const getIndex = async (req: Request, res: Response): Promise<Response> => {
   return res.send("everything is ok");
};
