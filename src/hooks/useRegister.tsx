import { useNavigate } from "react-router";
import type { UserData } from "../types";
import { useState } from "react";
import { register } from "../services/register.api";

export const useRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const registerApi = async (userData: UserData) => {
    try {
      setLoading(true);

      await register(userData);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { registerApi, loading };
};
