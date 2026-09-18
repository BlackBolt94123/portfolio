const DEFAULT_RESUME_FILE = "Nakamura Kazuya.pdf";

/** Resume download: override with a full URL on Vercel, or use the file in /public. */
export function getResumeHref(): string {
  const fromEnv = process.env.NEXT_PUBLIC_RESUME_URL?.trim();
  if (fromEnv) return fromEnv;
  return `/${encodeURIComponent(DEFAULT_RESUME_FILE)}`;
}

export function getResumeDownloadName(): string {
  return DEFAULT_RESUME_FILE;
}
