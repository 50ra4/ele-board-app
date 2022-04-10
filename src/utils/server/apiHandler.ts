import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next/types';
import { ErrorHandler, errorHandler } from './errorHandler';

const httpMethods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'] as const;

type HttpMethod = typeof httpMethods[number];

const isHttpMethod = (method: string): method is HttpMethod =>
  httpMethods.some((m) => m === method);

type Handlers = Partial<Record<HttpMethod, NextApiHandler>>;

/**
 * @see https://zenn.dev/nalo/articles/next-api-routes-error-handling
 */
export const apiHandler = (handlers: Handlers, onError: ErrorHandler = errorHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;

    if (!method || !isHttpMethod(method)) {
      return res.status(405).json({
        error: {
          statusCode: 405,
          message: `Method ${req.method} Not Allowed`,
        },
      });
    }

    const handler = handlers[method];

    if (!handler) {
      return res.status(405).json({
        error: {
          statusCode: 405,
          message: `Method ${req.method} Not Allowed`,
        },
      });
    }

    try {
      await handler(req, res);
    } catch (err) {
      onError(err, res);
    }
  };
};
