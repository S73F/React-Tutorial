import { DEFAULT_URL } from "../constants";

export const sendBooking = async (id: number, duration: number) => {
  const headers: HeadersInit = { "Content-Type": "application/json" };
  const token = localStorage.getItem("authToken");

  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${DEFAULT_URL}/api/equipment/${id}/book`, {
    method: "POST",
    headers,
    body: JSON.stringify({ duration }),
  });

  if (!response.ok) throw new Error("Errore durante il fetching dell'API");

  return await response.json();
};
