import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useFetchBookings } from "../hooks/useFetchBookings";

export const Prenotazioni = () => {
  const { bookings, loading } = useFetchBookings();

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Typography variant="h3" mb={4} textAlign={"center"}>
        Prenotazioni
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID Prenotazione</TableCell>
              <TableCell align="right">ID Attrezzo</TableCell>
              <TableCell align="right">Data Inizio</TableCell>
              <TableCell align="right">Data Fine</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow
                key={booking.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {booking.id}
                </TableCell>
                <TableCell align="right">{booking.equipment_id}</TableCell>
                <TableCell align="right">{booking.start_date}</TableCell>
                <TableCell align="right">{booking.end_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
