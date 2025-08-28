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
    </div>
  );
};

export default Step3;
