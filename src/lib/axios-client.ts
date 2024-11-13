import axios from 'axios';

import { useNotifications } from '@/components/ui/notifications';
import { env } from '@/config/env';

type RequestOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  cookie?: string;
  params?: Record<string, string | number | boolean | undefined | null>;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

function buildUrlWithParams(
  url: string,
  params?: RequestOptions['params'],
): string {
  if (!params) return url;
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null,
    ),
  );
  if (Object.keys(filteredParams).length === 0) return url;
  const queryString = new URLSearchParams(
    filteredParams as Record<string, string>,
  ).toString();
  return `${url}?${queryString}`;
}

async function axiosApi<T>(
  url: string,
  options: RequestOptions = {},
): Promise<T> {
  const { method = 'GET', headers = {}, body, cookie, params } = options;
  const fullUrl = buildUrlWithParams(`${env.API_URL}${url}`, params);

  try {
    const response = await axios({
      url: fullUrl,
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers,
        ...(cookie ? { Cookie: cookie } : {}),
      },
      data: body,
      withCredentials: true,
    });

    return response.data;
  } catch (error: any) {
    const message = error.response?.data?.message || error.message;
    if (typeof window !== 'undefined') {
      useNotifications.getState().addNotification({
        type: 'error',
        title: 'Error',
        message,
      });
    }
    throw new Error(message);
  }
}

export const axiosInstance = {
  get<T>(url: string, options?: RequestOptions): Promise<T> {
    return axiosApi<T>(url, { ...options, method: 'GET' });
  },
  post<T>(url: string, body?: any, options?: RequestOptions): Promise<T> {
    return axiosApi<T>(url, { ...options, method: 'POST', body });
  },
  put<T>(url: string, body?: any, options?: RequestOptions): Promise<T> {
    return axiosApi<T>(url, { ...options, method: 'PUT', body });
  },
  patch<T>(url: string, body?: any, options?: RequestOptions): Promise<T> {
    return axiosApi<T>(url, { ...options, method: 'PATCH', body });
  },
  delete<T>(url: string, options?: RequestOptions): Promise<T> {
    return axiosApi<T>(url, { ...options, method: 'DELETE' });
  },
};
