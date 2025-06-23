import { DEFAULT_URL } from "../constants";

export const fetchEquipments = async () => {
  const response = await fetch(`${DEFAULT_URL}/api/equipment`);

  if (!response.ok) throw new Error("Errore nel fetching dell'API");

  return await response.json();
};
