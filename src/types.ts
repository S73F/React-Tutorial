export interface EquipmentsResponse {
  id: number;
  name: string;
  claim: string;
  icon: string;
  image: string;
  pricePerMinute: number;
}

export interface BookingModalProps {
  equipment: EquipmentsResponse | undefined;
  open: boolean;
  handleOpen: (equipment: EquipmentsResponse) => void;
}

export interface BookedEquipmentsResponse {
  id: number;
  equipment_id: number;
  start_date: string;
  end_date: string;
}
