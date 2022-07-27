import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Styles
import "./Styles/App.scss";

// Components
import Home from "./pages/Home";
import NewActivity  from "./pages/NewActivity";

// import react router dom

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/dashboard/new-activity" element={<NewActivity />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
