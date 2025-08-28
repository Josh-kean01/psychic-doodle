// Step3.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "./FormContext";

const Step3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { updateFormData } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    updateFormData(data);
    navigate("/step4"); // go to next step
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 border rounded shadow-sm"
    >
      <h2 className="mb-4">Step 3: Work Eligibility & Preferences</h2>

      {/* Age */}
      <div className="mb-3">
        <label className="form-label">
          Are you at least 18 years of age? *
        </label>
        <select
          className="form-select"
          {...register("over18", { required: "This field is required" })}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.over18 && (
          <div className="text-danger">{errors.over18.message}</div>
        )}
      </div>

      {/* DOB */}
      <div className="mb-3">
        <label className="form-label">Date of Birth *</label>
        <input
          type="date"
          className="form-control"
          {...register("dob", { required: "Date of birth is required" })}
        />
        {errors.dob && <div className="text-danger">{errors.dob.message}</div>}
      </div>

      {/* Work authorization */}
      <div className="mb-3">
        <label className="form-label">
          Legally authorized to work in the United States? *
        </label>
        <select
          className="form-select"
          {...register("workAuth", { required: "This field is required" })}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.workAuth && (
          <div className="text-danger">{errors.workAuth.message}</div>
        )}
      </div>

      {/* Sponsorship */}
      <div className="mb-3">
        <label className="form-label">
          Will you now or in future require sponsorship? *
        </label>
        <select
          className="form-select"
          {...register("sponsorship", { required: "This field is required" })}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.sponsorship && (
          <div className="text-danger">{errors.sponsorship.message}</div>
        )}
      </div>

      {/* Total work hours */}
      <div className="mb-3">
        <label className="form-label">
          Total number of hours you prefer per week *
        </label>
        <input
          type="text"
          className="form-control"
          {...register("hoursPerWeek", { required: "This field is required" })}
        />
        {errors.hoursPerWeek && (
          <div className="text-danger">{errors.hoursPerWeek.message}</div>
        )}
      </div>

      {/* Willing to travel */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Are you willing to travel? *</label>
          <select
            className="form-select"
            {...register("willingTravel", {
              required: "This field is required",
            })}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.willingTravel && (
            <div className="text-danger">{errors.willingTravel.message}</div>
          )}
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">
            How much percentage will you travel?
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="0-25%"
            {...register("travelPercent")}
          />
        </div>
      </div>

      {/* Travel distance */}
      <div className="mb-3">
        <label className="form-label">
          How far will you travel? (Answer in miles)
        </label>
        <textarea
          className="form-control"
          rows="2"
          {...register("travelDistance")}
        />
      </div>

      {/* International travel */}
      <div className="mb-3">
        <label className="form-label">
          Willing to Travel Internationally? *
        </label>
        <select
          className="form-select"
          {...register("intlTravel", { required: "This field is required" })}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.intlTravel && (
          <div className="text-danger">{errors.intlTravel.message}</div>
        )}
      </div>

      {/* Relocation */}
      <div className="mb-3">
        <label className="form-label">Are you willing to relocate?</label>
        <select className="form-select" {...register("relocate")}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">If yes, preferred location</label>
        <input
          type="text"
          className="form-control"
          {...register("relocateLocation")}
        />
      </div>

      {/* Remote work */}
      <div className="mb-3">
        <label className="form-label">
          For a REMOTE job, willing to work anywhere within the USA? *
        </label>
        <select
          className="form-select"
          {...register("remoteUSA", { required: "This field is required" })}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.remoteUSA && (
          <div className="text-danger">{errors.remoteUSA.message}</div>
        )}
      </div>

      {/* Relocation help */}
      <div className="mb-3">
        <label className="form-label">Will you need relocation help? *</label>
        <select
          className="form-select"
          {...register("relocationHelp", {
            required: "This field is required",
          })}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.relocationHelp && (
          <div className="text-danger">{errors.relocationHelp.message}</div>
        )}
      </div>

      {/* Reference */}
      <div className="mb-3">
        <label className="form-label">Reference Details</label>
        <input
          type="text"
          className="form-control"
          placeholder="Can be someone from past job or university professor"
          {...register("reference")}
        />
      </div>

      {/* Driving license */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">
            Do you have a valid driving license?
          </label>
          <select className="form-select" {...register("drivingLicense")}>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">If yes, license type</label>
          <input
            type="text"
            className="form-control"
            {...register("licenseType")}
          />
        </div>
      </div>

      {/* Covid vaccine */}
      <div className="mb-3">
        <label className="form-label">Covid-19 Vaccine status</label>
        <input
          type="text"
          className="form-control"
          {...register("vaccineStatus")}
        />
      </div>

      {/* Shift */}
      <div className="mb-3">
        <label className="form-label">Preferred Shift</label>
        <select className="form-select" {...register("preferredShift")}>
          <option value="">Select</option>
          <option value="day">Day</option>
          <option value="night">Night</option>
          <option value="evening">Evening</option>
        </select>
      </div>

      {/* Weekend */}
      <div className="mb-3">
        <label className="form-label">
          Willing to work on weekend (if required)?
        </label>
        <select className="form-select" {...register("weekendWork")}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Criminal record */}
      <div className="mb-3">
        <label className="form-label">
          Have you ever been convicted of a criminal offense?
        </label>
        <select className="form-select" {...register("criminalRecord")}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">If Yes, please explain</label>
        <textarea
          className="form-control"
          rows="2"
          {...register("criminalDetails")}
        />
      </div>

      {/* Navigation buttons */}
      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/step2")}
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

export default Step3;
