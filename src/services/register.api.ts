import { DEFAULT_URL } from "../constants";
import type { UserData } from "../types";

export const register = async ({
  username,
  password,
}: UserData): Promise<string> => {
  const response = await fetch(`${DEFAULT_URL}/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) throw new Error("Errore durante il fetching dell'API");

  return await response.text();
};
