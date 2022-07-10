import { NextFunction, Request, Response } from "express";
import joi from "joi";

export const generateURLValidation = (req: Request, res: Response, next: NextFunction) => {
  // Validating the request body
  const bodySchema = joi.object({
    destination: joi.string().uri().required()
  });
  const bodyValidationResult = bodySchema.validate(req.body);
  if (bodyValidationResult.error) {
    return res.status(400).json({
      status: "error",
      message: bodyValidationResult.error.message
    });
  }
  // Validating the request query
  const querySchema = joi.object({});
  const queryValidationResult = querySchema.validate(req.query);
  if (queryValidationResult.error) {
    return res.status(400).json({
      status: "error",
      message: queryValidationResult.error.message
    });
  }
  next();
}
