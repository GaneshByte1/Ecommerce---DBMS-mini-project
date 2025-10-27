import type { NextFunction, Request, Response } from 'express';
import type { AnyZodObject, ZodObject, ZodRawShape } from 'zod';

export function validate<T extends ZodObject<ZodRawShape>>(
  schema: T | AnyZodObject,
  source: 'body' | 'query' | 'params' = 'body',
) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const data = (req as any)[source];
    const result = schema.safeParse(data);

    if (!result.success) {
      return next(result.error);
    }

    // assign parsed data back to request for downstream handlers
    (req as any)[source] = result.data;

    return next();
  };
}
