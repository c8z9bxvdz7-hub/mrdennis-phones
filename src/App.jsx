import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import PhonesPage from "./pages/PhonesPage";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import DataBundlesPage from "./pages/DataBundlesPage";

function App() {
  return (
    <div className="min-h-screen bg-[#e9eff7]">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/phones" element={<PhonesPage />} />
          <Route
            path="/swap"
            element={<ComingSoon title="Swap & Trade-in" />}
          />
          <Route path="/data-bundles" element={<DataBundlesPage />} />
          <Route
            path="/accessories"
            element={<ComingSoon title="Accessories" />}
          />
          <Route path="/contact" element={<ComingSoon title="Contact" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
