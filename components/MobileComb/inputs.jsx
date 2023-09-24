"use client";
import React, { useEffect, useState } from "react";
import { MdPlayArrow } from "react-icons/md";

// Bu kısım, InputFields adlı bir React bileşeni tanımlar.
const InputFields = ({
  facilities, // Tesisler listesi
  sources, // Kaynaklar listesi
  fuel_types, // Yakıt tipleri listesi
  fuels, // Yakıtlar listesi
  units, // Birimler listesi
  formData, // Form verileri
  setFormData, // Form verilerini güncelleme işlevi
}) => {
  // handleChange işlevi, form verilerinin güncellenmesini sağlar.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Yakıt Tipleri filtreleme
  const filteredFuelTypes = fuel_types.filter(
    (fuelType) =>
      fuelType.source_type_id ===
      sources.find((source) => source.name_tr === formData.source)?.id
  );

  // Yakıtları filtreleme
  const filteredFuels = fuels.filter(
    (fuel) =>
      fuel.fuel_type_id ===
      fuel_types.find((fuelType) => fuelType.name_tr === formData.fuel_type)
        ?.id
  );

  // Birimleri filtreleme
  const filteredUnits = units.filter(
    (unit) =>
      unit.fuel_id === fuels.find((fuel) => fuel.name_tr === formData.fuel)?.id
  );

  // JSX içeriği başlıyor
  return (
    <div className="mt-16">
      {/* Facility seçimi */}
      <div className="relative flex flex-col">
        <label htmlFor="facility" className="mb-2 text-lg">
          Facility
        </label>
        {/* Facility seçim kutusu */}
        <div className="relative w-1/2 rounded-lg rounded-br-[35px] border border-black p-4 pl-8">
          <select
            value={formData.facility || ""}
            onChange={handleChange}
            name="facility"
            id="selector"
          >
            <option value="">Seçiniz</option>
            {/* Tesisler listesi */}
            {facilities.map((facility) => (
              <option key={facility} value={facility}>
                {facility}
              </option>
            ))}
          </select>
          {/* Ok işareti */}
          <MdPlayArrow className="absolute right-0 top-0 rotate-90 text-4xl text-green-800" />
        </div>
      </div>

      {/* Yıl seçimi */}
      <div className="relative mt-6 flex flex-col">
        <label htmlFor="year" className="mb-2 text-lg">
          Year
        </label>
        {/* Yıl seçim kutusu */}
        <div className="relative w-1/2 rounded-lg rounded-br-[35px] border border-black p-4 pl-8">
          <select
            name="year"
            id="selector"
            value={formData.year || ""}
            onChange={handleChange}
          >
            <option value="">Seçiniz</option>
            {/* Yıl seçenekleri */}
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
          {/* Ok işareti */}
          <MdPlayArrow className="absolute right-0 top-0 rotate-90 text-4xl text-green-800" />
        </div>
      </div>

      {/* Yakıt Kaynağı seçimi */}
      <div className="relative mt-6 flex flex-col">
        <label htmlFor="fuelsource" className="mb-2 text-lg">
          Fuel Source
        </label>
        {/* Yakıt Kaynağı seçim kutusu */}
        <div className="relative w-1/2 rounded-lg rounded-br-[35px] border border-black p-4 pl-8">
          <select
            name="source"
            id="selector"
            value={formData.source || ""}
            onChange={handleChange}
          >
            <option value="">Seçiniz</option>
            {/* Kaynaklar listesi */}
            {sources.map((source) => (
              <option key={source.name_tr} value={source.name_tr}>
                {source.name_tr}
              </option>
            ))}
          </select>
          {/* Ok işareti */}
          <MdPlayArrow className="absolute right-0 top-0 rotate-90 text-4xl text-green-800" />
        </div>
      </div>

      {/* Yakıt Türü seçimi */}
      <div className="relative mt-6 flex flex-col">
        <label htmlFor="fueltype" className="mb-2 text-lg">
          Fuel Type
        </label>
        {/* Yakıt Türü seçim kutusu */}
        <div className="relative w-1/2 rounded-lg rounded-br-[35px] border border-black p-4 pl-8">
          <select
            name="fuel_type"
            id="selector"
            value={formData.fuel_type || ""}
            onChange={handleChange}
          >
            <option value="">Seçiniz</option>
            {/* Filtrelenmiş Yakıt Tipleri listesi */}
            {filteredFuelTypes?.map((type) => (
              <option key={type.name_tr} value={type.name_tr}>
                {type.name_tr}
              </option>
            ))}
          </select>
          {/* Ok işareti */}
          <MdPlayArrow className="absolute right-0 top-0 rotate-90 text-4xl text-green-800" />
        </div>
      </div>

      {/* Yakıt seçimi */}
      <div className="relative mt-6 flex flex-col">
        <label htmlFor="fuel" className="mb-2 text-lg">
          Fuel
        </label>
        {/* Yakıt seçim kutusu */}
        <div className="relative w-1/2 rounded-lg rounded-br-[35px] border border-black p-4 pl-8">
          <select
            name="fuel"
            id="selector"
            value={formData.fuel || ""}
            onChange={handleChange}
          >
            <option value="">Seçiniz</option>
            {/* Filtrelenmiş Yakıtlar listesi */}
            {filteredFuels.map((fuel, index) => (
              <option key={fuel.name_tr + index} value={fuel.name_tr}>
                {fuel.name_tr}
              </option>
            ))}
          </select>
          {/* Ok işareti */}
          <MdPlayArrow className="absolute right-0 top-0 rotate-90 text-4xl text-green-800" />
        </div>
      </div>

      {/* Miktar girişi */}
      <div className="relative mt-10 flex flex-col">
        <div className="relative flex w-1/2 items-end justify-between gap-x-10 rounded-lg rounded-br-[35px] border border-black py-3 pl-8">
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Giriniz"
              className="border-b-2 border-gray-300 pb-2 outline-none w-28"
              name="amount"
              value={formData.amount || ""}
              onChange={handleChange}
            />
          </div>
          {/* Birimler seçimi */}
          <div className=" flex flex-col relative border-left">
            <label htmlFor="" className="text-sm">
              Units
            </label>
            {/* Birimler seçim kutusu */}
            <select
              name="unit"
              id="selector2"
              value={formData.unit || ""}
              onChange={handleChange}
            >
              <option value="">Seçiniz</option>
              {/* Filtrelenmiş Birimler listesi */}
              {filteredUnits.map((unit) => (
                <option key={unit.name_tr + unit.fuel_id} value={unit.name_tr}>
                  {unit.name_tr}
                </option>
              ))}
            </select>
          </div>

          {/* Ok işareti */}
          <MdPlayArrow className="absolute right-0 top-0 rotate-90 text-4xl text-green-800" />
        </div>
      </div>
    </div>
  );
};

export default InputFields;
