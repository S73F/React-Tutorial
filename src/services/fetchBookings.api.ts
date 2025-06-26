import { DEFAULT_URL } from "../constants";

export const fetchBookings = async () => {
  const headers: HeadersInit = { "Content-Type": "application/json" };
  const token = localStorage.getItem("authToken");

  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${DEFAULT_URL}/api/equipment-bookings`, {
    method: "GET",
    headers,
  });

  if (!response.ok) throw new Error("Errore durante il fetching dell'API");

  return await response.json();
};
