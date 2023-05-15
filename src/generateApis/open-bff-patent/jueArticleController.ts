// @ts-ignore
/* eslint-disable */
import request from '@/utils/MyAnxios.ts';

/** searchPictureByPage POST /api/jueArticle/get */
export async function searchPictureByPageUsingPOST1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.searchPictureByPageUsingPOST1Params,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseString_>(`/open-bff-patent/api/jueArticle/get`, {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** searchPictureByPage POST /api/jueArticle/search/page/vo */
export async function searchPictureByPageUsingPOST(
  body: API.PictureQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageJueArticle_>(
    `/open-bff-patent/api/jueArticle/search/page/vo`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
