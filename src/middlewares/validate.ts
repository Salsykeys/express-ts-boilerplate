import { type Request, type Response, type NextFunction } from "express";
import { ZodSchema } from "zod/v3";

const validate = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if(!result.success) return res.status(422).json({
        meta: {
            status: false,
            message: 'Validation error',
            errors: result.error.flatten().fieldErrors,
        }
    });

    req.body = result.data;
    next();
}

export default validate;