import { apiSlice } from '../../../app/api/apiSlice';
import { ReqLogin, ReqRegister, ResLogin } from '../types';

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<ResLogin, [ReqRegister, string]>({
      query: (data) => ({
        url: `auth/${data[1]}`,
        method: 'POST',
        headers: { Authorization: false },
        data: data[0],
      }),
    }),
    login: builder.mutation<ResLogin, ReqLogin>({
      query: (data) => ({
        url: 'auth/login',
        method: 'POST',
        headers: { Authorization: false },
        data,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
