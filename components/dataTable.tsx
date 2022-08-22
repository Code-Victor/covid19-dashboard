import React from "react";
import type { states } from "@app/services/covid19";

const DataTable = ({ data, reset }: { data: states[]; reset:()=> void }) => {
  if (data.length === 0) {
    return (
      <h1 className="text-3xl text-center text-gray-700 mt-8">
        Ooh Crap.... no results found ＞︿＜
        <span className="text-blue-500 text-xl" onClick={reset}>
          Reset search
        </span>
      </h1>
    );
  }
  return (
    <table className="w-full mt-6 divide-y">
      <thead>
        {Object.keys?.(data[0]).map((key, index) => {
          if (key === "_id") {
            return;
          }
          return (
            <th
              key={index}
              className="text-left py-4 text-xl capitalize font-semibold"
            >
              {key}
            </th>
          );
        })}
      </thead>
      <tbody className="divide-y">
        {data.slice(0, 10).map((state, i) => {
          return (
            <tr key={i}>
              {Object.values?.(state).map((values, index) => {
                if (index === 1) {
                  return;
                }
                return (
                  <td key={index} className="py-4">
                    {values}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
