// @ts-ignore
/* eslint-disable */
import request from '@/utils/MyAnxios.ts';

/** listUserByPage POST /api/search/list/page/vo */
export async function listUserByPageUsingPOST(
  body: API.SearchQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseSearchVO_>(`/open-bff-patent/api/search/list/page/vo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
