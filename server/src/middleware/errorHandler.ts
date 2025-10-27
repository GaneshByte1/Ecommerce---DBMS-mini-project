import type { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

// Not Found handler
export const notFoundHandler = (_req: Request, res: Response) => {
  res.status(404).json({ message: 'Not Found' });
};

// Centralized error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: 'Validation error',
      errors: err.flatten(),
    });
  }

  const status = (err as any)?.status || 500;
  const message = (err as any)?.message || 'Internal Server Error';

  // eslint-disable-next-line no-console
  if (status >= 500) console.error(err);

  return res.status(status).json({ message });
};
