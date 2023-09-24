"use client";
import React, { useEffect, useState } from "react";

const CalculationTable = ({ data, setFormData, setTableData }) => {
  const [dataCurrent, setDataCurrent] = useState(data);

  useEffect(() => {
    setDataCurrent(data);
  }, [data]);

  
  const handleEdit = (index) => {
    const editedItem = dataCurrent[index];
    setFormData({ ...editedItem });
  };


  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setTableData(updatedData);
    setDataCurrent(updatedData);
  };

  return (
    <div className="mt-4">
      <h1 className="mb-4">Hesaplamalar</h1>
      <table className="w-full border border-[#0D1840]">
        <thead>
          <tr className="bg-[#0D1840] text-white">
            <th className="h-16 w-[10%] rounded-tl-3xl border border-white text-center">
              Facility ID
            </th>
            <th className="w-[10%] border border-white text-center">Year</th>
            <th className="w-[10%] border border-white text-center">Fuel</th>
            <th className="w-[10%] border border-white text-center">
              Amount of Fuel
            </th>
            <th className="w-[10%] border border-white text-center">Units</th>
            <th className="w-[10%] border border-white text-center">
              CO<sub>2</sub>
            </th>
            <th className="w-[10%] border border-white text-center">
              CH<sub>4</sub>
            </th>
            <th className="w-[10%] border border-white text-center">
              N<sub>2</sub>O
            </th>
            <th className="w-[10%] border border-white text-center">
              CO
              <sub>
                2 <sup>e</sup>
              </sub>
            </th>
            <th className="w-[10%] rounded-tr-3xl border border-white text-center"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border border-[#0D1840] text-center">
              <td className="h-16 border border-gray-300"> {item.facility} </td>
              <td className="border border-gray-300"> {item.year} </td>
              <td className="border border-gray-300"> {item.fuel} </td>
              <td className="border border-gray-300"> {item.amount} </td>
              <td className="border border-gray-300"> {item.unit} </td>
              <td className="border border-gray-300"> {item.co2} </td>
              <td className="border border-gray-300"> {item.ch4} </td>
              <td className="border border-gray-300"> {item.n2o} </td>
              <td className="border border-gray-300"> {item.co2e} </td>
              <td className="border border-gray-300">
                <span className="flex flex-col items-center justify-center gap-y-1 text-white">
                  <button
                    onClick={() => handleDelete(index)}
                    className="w-11/12 rounded-md bg-[#0D1840]"
                  >
                    Sil
                  </button>
                  <button
                    onClick={() => handleEdit(index)}
                    className="w-11/12 rounded-md bg-[#0D1840]"
                  >
                    Düzenle
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalculationTable;