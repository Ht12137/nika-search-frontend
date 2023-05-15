// @ts-ignore
/* eslint-disable */
import request from '@/utils/MyAnxios.ts';

/** searchPictureByPage POST /api/picture/search/page/vo */
export async function searchPictureByPageUsingPOST2(
  body: API.PictureQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePagePicture_>(`/open-bff-patent/api/picture/search/page/vo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
