// Step3.jsx
import { useFormContext } from "./FormContext";
import { useNavigate } from "react-router-dom";

const Step3 = () => {
  const { formData } = useFormContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Final Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <h2>Step 3: Confirmation</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <button onClick={() => navigate("/step2")}>Back</button>
      <button onClick={handleSubmit}>Submit</button>

      <div className="mb-6 text-center header">
        <div className="flex flex-row max-w-5xl mx-auto py-3">
          <motion.div className="">
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              src={logo}
              alt="Logo"
              className="h-32"
            />
          </motion.div>
          <div className="flex flex-col items-start justify-center pt-4">
            <motion.div
              className="text-3xl font-bold text-white bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ocean"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              OCEANSMITH.
            </motion.div>
            <div className="text-1xl font-semibold text-muted-foreground subtitle">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Job Hunt Made Easy
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
