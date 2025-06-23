import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { modalStyle } from "../styles";
import type { BookingModalProps } from "../types";
import { useState } from "react";

export const BookingModal = ({
  equipment,
  open,
  handleOpen,
}: BookingModalProps) => {
  const [minutes, setMinutes] = useState<number>(0);

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
            InputProps={{ inputProps: { min: 1, max: 30 } }}
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
          />
          <Button sx={{ mt: 2 }}>Prenota</Button>
        </Stack>
      </Box>
    </Modal>
  );
};
