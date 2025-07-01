// -------------------------------------------------------
// 2. Basic‑Auth HTTP Interceptor (adds Authorization header)
// -------------------------------------------------------
import { HttpRequest, HttpHandlerFn } from '@angular/common/http';

/**
 * Intercepts **all** outgoing HTTP requests and attaches a Basic‑Auth header.
 * Username: `aaa`  Password: `bbb`
 */
export function basicAuthInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) {
  const credentials = btoa('admin:admin123'); // base64‑encode "aaa:bbb"
  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Basic ${credentials}`),
  });
  return next(authReq);
}