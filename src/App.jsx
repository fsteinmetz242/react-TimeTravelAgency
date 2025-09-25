import { Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import DestinationsPage from "./pages/DestinationsPage";
import DestinationNewYork from "./pages/DestinationNewYork";
import SingleDestinationSlug from "./pages/SingleDestinationSlug";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <Routes>
      {/* Routes-Container definiert alle verfügbaren Routen */}
      {/* Parent-Route mit MainLayout als Wrapper */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<StartPage />} />
        {/* Seite mit allen Orten */}
        <Route path="/destinations" index element={<DestinationsPage />} />
        {/* Sonderseite Ort über Name */}
        <Route path="/NewYork" index element={<DestinationNewYork />} />
        {/* Einzelner Ort über :slug */}
        <Route
          path="/destinationpage/:slug"
          index
          element={<SingleDestinationSlug />}
        />
      </Route>
    </Routes>
  );
}

export default App;
