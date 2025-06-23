import { useEffect, useState } from "react";
import type { BookedEquipmentsResponse } from "../types";
import { fetchBookings } from "../services/fetchBookings.api";

export const useFetchBookings = () => {
  const [bookings, setBookings] = useState<BookedEquipmentsResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchBookings()
      .then((data: BookedEquipmentsResponse[]) => {
        setBookings(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return { bookings, loading };
};
