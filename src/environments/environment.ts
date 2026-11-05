/**
 * Backend address — ONE place.
 *
 * The real value lives in  public/config.json  (copied next to index.html in
 * the built site as  config.json). The app reads it at startup (see main.ts),
 * so after a build you can change the backend by editing dist/.../config.json
 * only — no rebuild needed.
 *
 * `DEFAULT_BACKEND_URL` is used only if config.json is missing or invalid.
 */
const DEFAULT_BACKEND_URL = 'http://127.0.0.1:8000';

export const environment = {
  production: false,

  backendUrl: DEFAULT_BACKEND_URL,
  apiUrl: `${DEFAULT_BACKEND_URL}/api/admin`,
  mediaUrl: `${DEFAULT_BACKEND_URL}/api/media/`,
  contactUrl: `${DEFAULT_BACKEND_URL}/api/contact`,
};

/** Rebuilds every backend URL from a single base URL. */
export function setBackendUrl(url: string): void {
  const base = url.trim().replace(/\/+$/, '');
  environment.backendUrl = base;
  environment.apiUrl = `${base}/api/admin`;
  environment.mediaUrl = `${base}/api/media/`;
  environment.contactUrl = `${base}/api/contact`;
}

/** Reads config.json (never cached) and applies it. Safe to fail. */
export async function loadRuntimeConfig(): Promise<void> {
  try {
    const res = await fetch('config.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`config.json: HTTP ${res.status}`);
    const cfg = await res.json();
    if (cfg && typeof cfg.backendUrl === 'string' && cfg.backendUrl.trim()) {
      setBackendUrl(cfg.backendUrl);
    }
  } catch (err) {
    console.warn('Could not load config.json, using default backend URL.', err);
  }
}
