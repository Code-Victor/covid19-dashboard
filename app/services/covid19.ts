// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface covid19Return {
  data: {
    totalSamplesTested: string;
    totalConfirmedCases: number;
    totalActiveCases: number;
    discharged: number;
    death: number;
    states: states[];
  };
}
export interface states {
  state: string;
  _id: string;
  confirmedCases: number;
  caseOnAdmission: number;
  discharged: number;
  death: number;
}
// Define a service using a base URL and expected endpoints
export const covid19Api = createApi({
  reducerPath: "covid19Api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://covidnigeria.herokuapp.com/api",
  }),
  endpoints: (builder) => ({
    getCovidData: builder.query<covid19Return, void>({
      query: () => ``,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCovidDataQuery } = covid19Api;
