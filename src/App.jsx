// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import FinalStep from "./FinalStep";
import { FormProvider } from "./FormContext";

const App = () => {
  return (
    <FormProvider>
      <Router>
        {/* Fullscreen wrapper */}
        <div className="d-flex flex-column min-vh-100 bg-light w-100">
          {/* 🔹 Header that shows on all screens */}
          <header className="bg-dark text-white py-3 px-4 shadow">
            <h2 className="m-0">My Application Form</h2>
          </header>

          {/* 🔹 Main content area, centered */}
          <main className="flex-grow-1 d-flex justify-content-center align-items-start py-5">
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
            <small>© {new Date().getFullYear()} My Company</small>
          </footer>
        </div>
      </Router>
    </FormProvider>
  );
};

export default App;
