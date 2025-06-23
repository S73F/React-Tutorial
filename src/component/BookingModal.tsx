import {
  Box,
  Button,
  CircularProgress,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { modalStyle } from "../styles";
import type { BookingModalProps } from "../types";
import { useState } from "react";
import { useSendBooking } from "../hooks/useSendBooking";

export const BookingModal = ({
  equipment,
  open,
  handleOpen,
}: BookingModalProps) => {
  const [minutes, setMinutes] = useState<number>(0);
  const { bookEquipment, loading } = useSendBooking();

  const book = async () => {
    if (equipment) {
      await bookEquipment(equipment.id, minutes);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2" mb={3}>
          {equipment?.name}
        </Typography>
        <img src={equipment?.image} width={"100%"} />
        <Stack direction={"row"} mt={3}>
          <TextField
            type="number"
            InputProps={{ inputProps: { min: 1, max: 20 } }}
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
          />
          <Button sx={{ mt: 2 }} onClick={book}>
            Prenota
          </Button>
        </Stack>
        {loading ? <CircularProgress /> : ""}
      </Box>
    </Modal>
  );
};
