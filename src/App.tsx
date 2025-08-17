import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";
import VisitTracker from "./components/VisitTracker";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      {/* <VisitTracker /> */}
      <BrowserRouter>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Loader>
              <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            </Loader>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
