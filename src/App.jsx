import "./App.css";
import LandingPage from "./pages/LandingPage";
import ResumePage from "./pages/ResumePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/resume" element={<ResumePage />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
