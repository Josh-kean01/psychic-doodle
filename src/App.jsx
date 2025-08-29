// App.jsx
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import FinalStep from "./FinalStep";
import { FormProvider } from "./FormContext";
import "./App.css";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <FormProvider>
      <Router>
        {/* Fullscreen wrapper */}
        <div className="d-flex flex-column min-vh-100 bg-light w-100">
          {/* 🔹 Header that shows on all screens */}
          <header className="header text-white p-1 px-md-5 px-2 shadow">
            <div className="d-flex flex-row">
              <img src={logo} width={120} />

              <div className="d-flex flex-column justify-content-center ">
                <h3 className="mb-0"> OCEANSMITH.</h3>
                <p className="mb-0 small">Job Hunt Made Easy</p>
              </div>
            </div>
          </header>

          {/* 🔹 Main content area, centered */}
          <main className="flex-grow-1 d-flex justify-content-center align-items-start py-3 py-md-5 px-2">
            <div className="w-100" style={{ maxWidth: "900px" }}>
              <Routes>
                <Route path="/" element={<Step1 />} />
                <Route path="/step2" element={<Step2 />} />
                <Route path="/step3" element={<Step3 />} />
                <Route path="/step4" element={<Step4 />} />
                <Route path="/final" element={<FinalStep />} />
              </Routes>
            </div>
          </main>

          {/* 🔹 Footer (optional, appears everywhere) */}
          <footer className="bg-light text-center py-3 border-top">
            <small>
              © {new Date().getFullYear()}{" "}
              <Link
                to="https://oceangrsmith.com"
                className="text-decoration-none text-dark"
              >
                OCEANSMITH INC
              </Link>
              . All rights reserved.
            </small>
          </footer>
        </div>
      </Router>
    </FormProvider>
  );
};

export default App;
