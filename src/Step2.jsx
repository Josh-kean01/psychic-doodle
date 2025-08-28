// Step2.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "./FormContext";

const Step2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { updateFormData } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    updateFormData(data);
    navigate("/step3");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 border rounded shadow-sm"
    >
      <h2 className="mb-4">Step 2: Education</h2>

      {/* Do you have a bachelor's degree? */}
      <div className="mb-3">
        <label className="form-label">Do you have a bachelor’s degree?</label>
        <select
          className="form-select"
          {...register("hasBachelors", { required: "This field is required" })}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.hasBachelors && (
          <div className="text-danger">{errors.hasBachelors.message}</div>
        )}
      </div>

      {/* University */}
      <div className="mb-3">
        <label className="form-label">University/College (Bachelor’s)</label>
        <input
          type="text"
          className="form-control"
          {...register("university")}
        />
      </div>

      {/* Start / End Date */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Start Date</label>
          <input
            type="date"
            className="form-control"
            {...register("eduStart")}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">End Date</label>
          <input type="date" className="form-control" {...register("eduEnd")} />
        </div>
      </div>

      {/* CGPA */}
      <div className="mb-3">
        <label className="form-label">CGPA Bachelor’s</label>
        <input type="text" className="form-control" {...register("cgpa")} />
      </div>

      {/* Highest education level */}
      <div className="mb-3">
        <label className="form-label">Highest education level achieved *</label>
        <select
          className="form-select"
          {...register("educationLevel", {
            required: "This field is required",
          })}
        >
          <option value="">Select</option>
          <option value="bachelors">Bachelor’s</option>
          <option value="masters">Master’s</option>
          <option value="phd">PhD</option>
          <option value="other">Other</option>
        </select>
        {errors.educationLevel && (
          <div className="text-danger">{errors.educationLevel.message}</div>
        )}
      </div>

      {/* If other */}
      <div className="mb-3">
        <label className="form-label">If you chose 'Other', specify</label>
        <input type="text" className="form-control" {...register("otherEdu")} />
      </div>

      {/* Languages known */}
      <div className="mb-3">
        <label className="form-label">Languages known</label>
        <input
          type="text"
          placeholder="Comma-separated"
          className="form-control"
          {...register("languages")}
        />
      </div>

      {/* Certification */}
      <div className="mb-3">
        <label className="form-label">Certification (If any) *</label>
        <input
          type="text"
          className="form-control"
          {...register("certification", {
            required: "Certification is required",
          })}
        />
        {errors.certification && (
          <div className="text-danger">{errors.certification.message}</div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/")}
        >
          Back
        </button>
        <button type="submit" className="btn btn-primary">
          Next
        </button>
      </div>
    </form>
  );
};

export default Step2;
