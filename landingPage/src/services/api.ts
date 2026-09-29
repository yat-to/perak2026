const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export async function fetchWithFallback<T>(
  endpoint: string,
  fallbackData: T,
  options?: RequestInit
): Promise<{ data: T; source: 'api' | 'mock' }> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      return { data: (json.data ?? json) as T, source: 'api' };
    }
  } catch {
    // Graceful fallback to mock data when backend is not active
  }

  return { data: fallbackData, source: 'mock' };
}
