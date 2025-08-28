// FinalStep.jsx
import { useForm } from "react-hook-form";
import { useFormContext } from "./FormContext";

const FinalStep = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { formData, updateFormData } = useFormContext();

  const onSubmit = (data) => {
    const finalData = { ...formData, ...data };
    console.log("Final Form Data:", finalData);
    alert("Form submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 border rounded shadow-sm"
    >
      <h2 className="mb-4">Final Section</h2>

      {/* Apply all over USA */}
      <div className="mb-3">
        <label className="form-label">
          Do you want us to apply for jobs all over the USA? *
        </label>
        <select
          className="form-select"
          {...register("applyAllUSA", { required: "This field is required" })}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.applyAllUSA && (
          <div className="text-danger">{errors.applyAllUSA.message}</div>
        )}
      </div>

      {/* Location preference if NO */}
      <div className="mb-3">
        <label className="form-label">
          If NO above, list your location preference
        </label>
        <input
          type="text"
          className="form-control"
          {...register("locationPreference")}
        />
      </div>

      {/* Remote jobs apply anywhere */}
      <div className="mb-3">
        <label className="form-label">
          For REMOTE jobs, can we apply all over the USA? *
        </label>
        <select
          className="form-select"
          {...register("remoteAllUSA", { required: "This field is required" })}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.remoteAllUSA && (
          <div className="text-danger">{errors.remoteAllUSA.message}</div>
        )}
      </div>

      {/* Remote location preference if NO */}
      <div className="mb-3">
        <label className="form-label">
          If NO above, list location preference for REMOTE jobs
        </label>
        <input
          type="text"
          className="form-control"
          {...register("remoteLocationPreference")}
        />
      </div>

      {/* Companies to exclude */}
      <div className="mb-3">
        <label className="form-label">
          Is there any company you DO NOT want us to apply to? *
        </label>
        <textarea
          className="form-control"
          rows="2"
          {...register("excludeCompanies", {
            required: "This field is required",
          })}
        />
        {errors.excludeCompanies && (
          <div className="text-danger">{errors.excludeCompanies.message}</div>
        )}
      </div>

      {/* Whatsapp for support */}
      <div className="mb-3">
        <label className="form-label">
          Your Whatsapp number for Customer Support *
        </label>
        <input
          type="text"
          className="form-control"
          {...register("whatsapp", { required: "This field is required" })}
        />
        {errors.whatsapp && (
          <div className="text-danger">{errors.whatsapp.message}</div>
        )}
      </div>

      {/* New or returning customer */}
      <div className="mb-3">
        <label className="form-label">
          Are you a new customer or a returning customer? *
        </label>
        <select
          className="form-select"
          {...register("customerType", { required: "This field is required" })}
        >
          <option value="">Select</option>
          <option value="new">New Customer</option>
          <option value="returning">Returning Customer</option>
        </select>
        {errors.customerType && (
          <div className="text-danger">{errors.customerType.message}</div>
        )}
      </div>

      {/* How did you hear about Jack Meow */}
      <div className="mb-3">
        <label className="form-label">How did you hear about Jack Meow?</label>
        <input
          type="text"
          className="form-control"
          {...register("referralSource")}
        />
      </div>

      {/* Friend referral */}
      <div className="mb-3">
        <label className="form-label">
          If your friend referred us, please mention their name
        </label>
        <input
          type="text"
          className="form-control"
          {...register("friendReferral")}
        />
      </div>

      {/* Navigation buttons */}
      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => window.history.back()}
        >
          Back
        </button>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FinalStep;
