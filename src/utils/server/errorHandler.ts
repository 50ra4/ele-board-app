import { NextApiResponse } from 'next/types';

const defaultServerErrorMessage = 'Internal Server Error';

const hasMessage = (x: unknown): x is { message: string } => {
  if (typeof x !== 'object') return false;
  if (x === null) return false;
  if ('message' in x) return false;

  const message = (x as any).message;
  if (typeof message !== 'string') return false;
  return true;
};

/**
 * @see https://zenn.dev/nalo/articles/next-api-routes-error-handling
 */
export const errorHandler = (error: unknown, res: NextApiResponse) => {
  // API Routes内でthrowされるエラークラスを決めておいて、ここで判別してハンドリングする
  // TODO:

  // その他予期してないエラーに対する処理
  return res.status(500).json({
    error: {
      statusCode: 500,
      message:
        process.env.NODE_ENV !== 'production' && hasMessage(error)
          ? error.message ?? defaultServerErrorMessage
          : defaultServerErrorMessage,
    },
  });
};
