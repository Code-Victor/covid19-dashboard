import React, { useEffect } from "react";
import numeral from "numeral";
import type { covid19Return } from "@app/services/covid19";
import { DataTable } from ".";

const Dashboard = ({ data: rawData }: { data: covid19Return }) => {
  const [data, setData] = React.useState(rawData);
  useEffect(() => {});
  return (
    <main className="px-2 mt-16">
      <div className="w-full max-w-[800px] mx-auto">
        <div className="flex divide-x-2 ">
          <div className="flex-1 flex gap-4 items-center flex-col">
            <h2 className="text-xl text-gray-800">Cases</h2>
            <h3 className="font-semibold text-3xl">
              {numeral(data.data.totalConfirmedCases).format("0a")}
            </h3>
          </div>
          <div className="flex-1 gap-4 items-center flex flex-col">
            <h2 className="text-xl text-gray-800">Deaths</h2>
            <h3 className="font-semibold text-3xl">
              {numeral(data.data.death).format("0,0")}
            </h3>
          </div>
          <div className="flex-1 gap-4 items-center flex flex-col">
            <h2 className="text-xl text-gray-800">Recoveries</h2>
            <h3 className="font-semibold text-3xl">
              {numeral(data.data.discharged).format("0a")}
            </h3>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <div className="relative">
            <label
              htmlFor="search"
              className="absolute top-1/2 -translate-y-1/2 left-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </label>
            <input
              {...{
                onChange: (e) =>
                  setData((currentData) => {
                    const filteredStates = rawData.data.states.filter(
                      (data) => {
                        return data.state
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase());
                      }
                    );
                    return {
                      ...currentData,
                      data: { ...currentData.data, states: filteredStates },
                    };
                  }),
              }}
              className="h-full flex-1 pl-10 px-2 py-2  border border-gray-800 rounded-full"
              placeholder="Search"
              type="text"
              name="search"
              id="search"
            />
          </div>
        </div>
        <DataTable data={data.data.states} reset={() => setData(rawData)} />
      </div>
    </main>
  );
};

export default Dashboard;
