import { useEffect, useState } from "react";
import type { EquipmentsResponse } from "../types";
import { fetchEquipments } from "../services/fetchEquipments.api";

export const useFetchEquipments = () => {
  const [data, setData] = useState<EquipmentsResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchEquipments()
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
};
