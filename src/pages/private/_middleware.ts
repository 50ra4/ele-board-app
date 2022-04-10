import { NextRequest, NextResponse } from 'next/server';

/**
 * @see https://github.com/vercel/examples/blob/main/edge-functions/basic-auth-password/pages/_middleware.ts
 */
export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1];
    const [user, password] = Buffer.from(auth, 'base64').toString().split(':');

    if (user === process.env.BASIC_AUTH_USER && password === process.env.BASIC_AUTH_PASSWORD) {
      return NextResponse.next();
    }
  }

  return new Response(
    `認証が必要です。\nユーザー名とパスワードを知らない方は管理者にご確認ください。`,
    {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    },
  );
}
