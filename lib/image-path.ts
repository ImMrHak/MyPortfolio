export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, use the path as is
  if (process.env.NODE_ENV === 'development') {
    return `/${cleanPath}`;
  }
  
  // In production (GitHub Pages), prepend the base path
  return `/MyPortfolio/${cleanPath}`;
}
