import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./routes/Home";
import { Layout } from "./component/Layout";
import { Attrezzature } from "./routes/Attrezzature";
import { Prenotazioni } from "./routes/Prenotazioni";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/equipments" element={<Attrezzature />} />
          <Route path="/bookings" element={<Prenotazioni />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
