import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import TitlesPage from "./Pages/TitlesPage/TitlesPage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import SchedulePage from "./Pages/SchedulePage/SchedulePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<SchedulePage />} index />
          <Route path="/titles" element={<TitlesPage />} />
          <Route path="/title/:code" element={<DetailPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
