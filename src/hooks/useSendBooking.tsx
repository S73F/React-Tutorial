import { useState } from "react";
import { sendBooking } from "../services/sendBooking.api";

export const useSendBooking = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const bookEquipment = async (equipmentId: number, duration: number) => {
    try {
      setLoading(true);
      await sendBooking(equipmentId, duration);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { bookEquipment, loading };
};
