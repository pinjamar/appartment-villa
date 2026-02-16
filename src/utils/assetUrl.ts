const rawBaseUrl = import.meta.env.BASE_URL || '/';

const baseUrl = rawBaseUrl.endsWith('/') ? rawBaseUrl : `${rawBaseUrl}/`;

export const withBaseUrl = (path: string): string => {
  if (!path) return baseUrl;
  if (/^https?:\/\//i.test(path)) return path;
  const cleaned = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}${cleaned}`;
};
