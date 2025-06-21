import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./routes/Home";
import { Layout } from "./component/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/equipments" element={<Home />} />
          <Route path="/bookings" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
