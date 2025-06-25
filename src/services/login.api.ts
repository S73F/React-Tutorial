import { DEFAULT_URL } from "../constants";
import type { LoginApiResponse, UserData } from "../types";

export const login = async ({
  username,
  password,
}: UserData): Promise<LoginApiResponse> => {
  const response = await fetch(`${DEFAULT_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) throw new Error("Errore durante il fetching dell'API");

  return await response.json();
};
