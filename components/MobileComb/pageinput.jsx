"use client";
import React, { useEffect, useState } from "react";
import InputFields from "./inputs";
import ResultFields from "./results";
import CalculationTable from "./calctable";


const InputPage = ({ facilities, sources, fuel_types, fuels, units }) => {
  const [formData, setFormData] = useState({
    facility: "",
    year: "",
    source: "",
    fuel_type: "",
    fuel: "",
    unit: "",
    amount: "",
  });
  const [resultData, setResultData] = useState({
    co2: "",
    ch4: "",
    n2o: "",
    co2e: "",
  });
  const [tableData, setTableData] = useState([]);

  const handleReset = () => {
    setFormData({
      facility: "",
      year: "",
      source: "",
      fuel_type: "",
      fuel: "",
      unit: "",
      amount: "",
    });
    setResultData({
      co2: "",
      ch4: "",
      n2o: "",
      co2e: "",
    });
  };

  //* Selected Source ID
  const selectedSourceId = sources.find(
    (source) => source.name_tr === formData.source,
  )?.id;

  //* Selected Fuel Type ID

  const selectedFuelTypeId = fuel_types.find(
    (fuelType) => fuelType.name_tr === formData.fuel_type,
  )?.id;

  //* Selected Fuel ID
  const selectedFuelId = fuels.find(
    (fuel) => fuel.name_tr === formData.fuel,
  )?.id;

  //* Selected Unit ID
  const selectedUnitId = units.find(
    (unit) => unit.name_tr === formData.unit,
  )?.id;

  let amount = formData?.amount;
  let facility = formData?.facility?.replace(/\s/g, "").toLowerCase();
  let year = formData?.year;

  useEffect(() => {
    if (
      !selectedSourceId ||
      !selectedFuelTypeId ||
      !selectedFuelId ||
      !selectedUnitId ||
      !amount ||
      !facility ||
      !year
    )
      return;
    fetch(
      `http://3.86.79.133/dijital-mentorluk-backend-test/public/test-data-calculate?source_id=${selectedSourceId}&fuel_type_id=${selectedFuelTypeId}&fuel_id=${selectedFuelId}&unit_id=${selectedUnitId}&amount=${amount}&facility=${facility}&year=${year}}`,
      {
        cache: "no-store",
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setResultData({
          co2: data.co2,
          ch4: data.ch4,
          n2o: data.no2,
          co2e: data.co2e,
        });
      });
  }, [
    selectedSourceId,
    selectedFuelTypeId,
    selectedFuelId,
    selectedUnitId,
    amount,
    facility,
    year,
  ]);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      fuel_type: "",
      fuel: "",
      unit: "",
      amount: "",
    }));
    setResultData({
      co2: "",
      ch4: "",
      n2o: "",
      co2e: "",
    });
  }, [formData.source]);

  // Kaydet butonu işlevsellik
  const handleSave = () => {
    const updatedTable = [...tableData];

    const newEntry = {
      facility: formData.facility,
      year: formData.year,
      fuel: formData.fuel,
      amount: formData.amount,
      unit: formData.unit,
      co2: resultData.co2,
      ch4: resultData.ch4,
      n2o: resultData.n2o,
      co2e: resultData.co2e,
    };

    updatedTable.push(newEntry);

    setTableData(updatedTable);

    handleReset();
  };

  return (
    <div className="relative mx-2 mt-2 h-full rounded-lg bg-white p-20">
      <div className="flex">
        <span className="absolute left-[45%] top-1/3 h-96 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-gray-300"></span>
        <div className="flex-1">
          <h1 className="w-[calc(100%-500px)] border-b-2 border-gray-200 pb-3 text-xl font-semibold uppercase">
            Girdi alanı
          </h1>
          <p className="mt-3">
            Lütfen salınım değerlerini hesaplamak için aşağıdaki alanları
            doldurun:
          </p>
          <InputFields
            facilities={facilities}
            sources={sources}
            fuel_types={fuel_types}
            fuels={fuels}
            units={units}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
        <div className="flex-1">
          <h1 className="w-[calc(100%-500px)] border-b-2 border-gray-200 pb-3 text-xl font-semibold uppercase">
            sonuç alanı
          </h1>
          <p className="mt-3">
            Girdi Alanı'nda girdiğiniz değerlere göre salınan gaz miktarları
            aşağıdaki gibidir:
          </p>
          <ResultFields resultData={resultData} />
          <div className="mr-40 mt-6 flex items-center justify-end gap-x-4">
            <button
              onClick={() => handleReset()}
              className="w-28 rounded-2xl bg-[#0D1840] py-2 text-white"
            >
              Sıfırla
            </button>
            <button
              onClick={() => handleSave()}
              className="w-28 rounded-2xl bg-[#0D1840] py-2 text-white"
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>

      <CalculationTable
        data={tableData}
        setFormData={setFormData}
        setTableData={setTableData}
      />
    </div>
  );
};

export default InputPage;