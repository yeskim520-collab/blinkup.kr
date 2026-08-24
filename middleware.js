import { next } from '@vercel/functions';

const unauthorized = () =>
  new Response('Authentication required.', {
    status: 401,
    headers: {
      'Cache-Control': 'no-store',
      'WWW-Authenticate': 'Basic realm="BlinkUp Preview", charset="UTF-8"',
    },
  });

export default function middleware(request) {
  const siteUser = process.env.SITE_USER;
  const sitePassword = process.env.SITE_PASSWORD;

  if (!siteUser || !sitePassword) {
    return new Response('Site access is not configured.', {
      status: 503,
      headers: { 'Cache-Control': 'no-store' },
    });
  }

  const authorization = request.headers.get('authorization');
  if (!authorization?.startsWith('Basic ')) {
    return unauthorized();
  }

  try {
    const decoded = atob(authorization.slice(6));
    const separatorIndex = decoded.indexOf(':');

    if (separatorIndex < 0) {
      return unauthorized();
    }

    const user = decoded.slice(0, separatorIndex);
    const password = decoded.slice(separatorIndex + 1);

    if (user === siteUser && password === sitePassword) {
      return next();
    }
  } catch {
    return unauthorized();
  }

  return unauthorized();
}

export const config = {
  matcher: '/(.*)',
};
