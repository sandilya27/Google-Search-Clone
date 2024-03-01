"use client";

import { useEffect, useState } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("In");

  const getCountry = async () => {
    const response = await fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => data.country);

    if (!response) return;
    setCountry(response);
  };

  useEffect(() => {
    getCountry();
  }, []);

  return <div>{country}</div>;
};

export default CountryLookup;
