import React from "react";
import InputPage from "./pageinput";


const getData = async () => {
  const res = await fetch(
    `http://3.86.79.133/dijital-mentorluk-backend-test/public/test-data`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const Inputs = async () => {
  const { fuels, fuel_types, units, facilities, sources } = await getData();

  return (
    <InputPage
      facilities={facilities}
      sources={sources}
      fuel_types={fuel_types}
      fuels={fuels}
      units={units}
    />
  );
};

export default Inputs;