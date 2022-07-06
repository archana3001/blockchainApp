import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '77cb005a63msh770c4bcf6a8616fp1b62bfjsn26e5f0625a69'
};

const baseUrl='https://bing-news-search1.p.rapidapi.com';


const createRequest=(url)=>({
    url, headers: cryptoApiHeaders
});



export const cryptoNewsApi=createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&Count=${count}`),
        }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
