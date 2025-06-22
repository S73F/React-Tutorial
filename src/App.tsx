import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./component/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={<Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
