import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";
import VisitTracker from "./components/VisitTracker";

function App() {
  return (
    <>
      <VisitTracker />
      <BrowserRouter>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
