const EXTERNAL_ASSET_PATTERN = /^(?:https?:)?\/\/|^(?:data|blob):/i;

/**
 * Resolves files from Vite's public directory against the deployment base.
 * This keeps Firebase values such as "/imagenes botones/btn-001.png"
 * working both locally and under a GitHub Pages repository subpath.
 */
export function resolveAssetUrl(value?: string | null): string {
  if (!value || EXTERNAL_ASSET_PATTERN.test(value)) return value || '';

  const base = import.meta.env.BASE_URL || '/';
  const normalizedValue = value.replace(/^\.\//, '').replace(/^\/+/, '');
  const normalizedBase = base.replace(/^\.\//, '').replace(/^\/+/, '');

  // Avoid adding the deployment base twice to values already saved that way.
  if (normalizedBase && normalizedValue.startsWith(normalizedBase)) {
    return base.startsWith('./') ? `./${normalizedValue}` : `/${normalizedValue}`;
  }

  return `${base}${normalizedValue}`;
}
