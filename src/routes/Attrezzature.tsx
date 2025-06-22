import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useFetchEquipments } from "../hooks/useFetchEquipments";
import { height } from "../styles";

export const Attrezzature = () => {
  const { data, loading } = useFetchEquipments();

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Stack
      width={"100%"}
      minHeight={height}
      direction={{ xs: "column", sm: "row" }}
      flexWrap={"wrap"}
      justifyContent={"center"}
      useFlexGap
      spacing={7}
      padding={3}
    >
      {data.map((equipment) => (
        <Card>
          <CardActionArea>
            <CardMedia component="img" height="200" image={equipment.image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {equipment.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {equipment.claim}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Prenota
            </Button>
          </CardActions>
        </Card>
      ))}
    </Stack>
  );
};
