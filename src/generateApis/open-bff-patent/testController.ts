// @ts-ignore
/* eslint-disable */
import request from '@/utils/MyAnxios.ts';

/** userRegister GET /api/test/testProxy */
export async function userRegisterUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseString_>(`/open-bff-patent/api/test/testProxy`, {
    method: 'GET',
    ...(options || {}),
  });
}
