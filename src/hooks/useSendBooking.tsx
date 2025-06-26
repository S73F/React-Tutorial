import { useState } from "react";
import { sendBooking } from "../services/sendBooking.api";

export const useSendBooking = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const token = localStorage.getItem("authToken");

  const bookEquipment = async (equipmentId: number, duration: number) => {
    try {
      setLoading(true);
      token
        ? await sendBooking(equipmentId, duration, token)
        : await sendBooking(equipmentId, duration);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { bookEquipment, loading };
};
