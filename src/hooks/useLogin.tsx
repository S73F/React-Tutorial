import { useNavigate } from "react-router";
import { login } from "../services/login.api";
import type { UserData } from "../types";
import { useState } from "react";

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const loginApi = async (userData: UserData) => {
    try {
      setLoading(true);

      await login(userData).then((data) => {
        localStorage.setItem("authToken", data.token);
        navigate("/home");
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loginApi, loading };
};
