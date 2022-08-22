import { useGetCovidDataQuery } from "@app/services/covid19";
import type { NextPage } from "next";
import Head from "next/head";
import Dashboard from "@components/dashboard";

const Home: NextPage = () => {
  const { data, error, isLoading } = useGetCovidDataQuery();

  if (isLoading) {
    return (
      <div className=" animate-spin border-4 rounded-full border-white border-t-blue-600  border-r-blue-600 w-16 h-16 mx-auto mt-24"></div>
    );
  }
  if (error) {
    return (
      <h1 className="text-red-500 text-2xl font-bold text-center">Error </h1>
    );
  }

  return (
    <div>
      <Head>
        <title>Covid 19 Dashboard</title>
        <meta name="description" content="view covid 19 stats at a glance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl mt-4 text-center font-semibold text-blue-600">
        Covid 19 Dashboard
      </h1>
      <Dashboard data={data!} />
    </div>
  );
};

export default Home;
