import axios from "axios";

export const getEconomicPackages = async () => {
  const res = await axios.get(
    "http://192.168.0.82:4000/packages/most-popularity"
  );
  return res.data || [];
};

export const getPopularityPackages = async () => {
  const res = await axios.get(
    "http://192.168.0.82:4000/packages/most-economic"
  );
  return res.data || [];
};
