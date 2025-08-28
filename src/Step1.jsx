import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "./FormContext";

const Step1 = () => {
  const { formData, updateFormData } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    updateFormData(data);
    navigate("/step2");
  };

  return (
    <div className="container-fluid my-4 justify-content-center w-100 d-flex">
      <form onSubmit={handleSubmit(onSubmit)} className="card p-4 shadow">
        <h2 className="mb-3">Personal Information</h2>

        {/* Name Fields */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">First Name *</label>
            <input
              {...register("firstName", { required: "First name is required" })}
              className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            />
            {errors.firstName && (
              <div className="invalid-feedback">{errors.firstName.message}</div>
            )}
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Middle Name</label>
            <input {...register("middleName")} className="form-control" />
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Last Name *</label>
            <input
              {...register("lastName", { required: "Last name is required" })}
              className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
            />
            {errors.lastName && (
              <div className="invalid-feedback">{errors.lastName.message}</div>
            )}
          </div>
        </div>

        {/* Email & Phone */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Email *</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Phone *</label>
            <input
              {...register("phone", { required: "Phone number is required" })}
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            />
            {errors.phone && (
              <div className="invalid-feedback">{errors.phone.message}</div>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="mb-3">
          <label className="form-label">Address *</label>
          <input
            {...register("address", { required: "Address is required" })}
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
          />
          {errors.address && (
            <div className="invalid-feedback">{errors.address.message}</div>
          )}
        </div>

        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">City *</label>
            <input
              {...register("city", { required: "City is required" })}
              className={`form-control ${errors.city ? "is-invalid" : ""}`}
            />
            {errors.city && (
              <div className="invalid-feedback">{errors.city.message}</div>
            )}
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">US State *</label>
            <select
              {...register("state", { required: "State is required" })}
              className={`form-select ${errors.state ? "is-invalid" : ""}`}
            >
              <option value="">Select a state</option>
              <option value="NY">New York</option>
              <option value="CA">California</option>
              <option value="TX">Texas</option>
              {/* Add all US states here */}
            </select>
            {errors.state && (
              <div className="invalid-feedback">{errors.state.message}</div>
            )}
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">Zip *</label>
            <input
              {...register("zip", { required: "Zip code is required" })}
              className={`form-control ${errors.zip ? "is-invalid" : ""}`}
            />
            {errors.zip && (
              <div className="invalid-feedback">{errors.zip.message}</div>
            )}
          </div>
        </div>

        {/* Availability & Nationality */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Available to Work From *</label>
            <input
              type="date"
              {...register("availableFrom", {
                required: "Available date is required",
              })}
              className={`form-control ${
                errors.availableFrom ? "is-invalid" : ""
              }`}
            />
            {errors.availableFrom && (
              <div className="invalid-feedback">
                {errors.availableFrom.message}
              </div>
            )}
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Nationality *</label>
            <input
              {...register("nationality", {
                required: "Nationality is required",
              })}
              className={`form-control ${
                errors.nationality ? "is-invalid" : ""
              }`}
            />
            {errors.nationality && (
              <div className="invalid-feedback">
                {errors.nationality.message}
              </div>
            )}
          </div>
        </div>

        {/* LinkedIn */}
        <div className="mb-3">
          <label className="form-label">LinkedIn URL *</label>
          <input
            {...register("linkedin", { required: "LinkedIn is required" })}
            className={`form-control ${errors.linkedin ? "is-invalid" : ""}`}
          />
          {errors.linkedin && (
            <div className="invalid-feedback">{errors.linkedin.message}</div>
          )}
        </div>

        {/* Work Experience */}
        <div className="row">
          <div className="col-md-3 mb-3">
            <label className="form-label">Years of Experience *</label>
            <input
              type="number"
              {...register("experienceYears", {
                required: "Experience is required",
              })}
              className={`form-control ${
                errors.experienceYears ? "is-invalid" : ""
              }`}
            />
            {errors.experienceYears && (
              <div className="invalid-feedback">
                {errors.experienceYears.message}
              </div>
            )}
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label">Previous Job Title</label>
            <input {...register("previousJobTitle")} className="form-control" />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label">Previous Job Start</label>
            <input
              type="date"
              {...register("previousJobStart")}
              className="form-control"
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label">Previous Job End</label>
            <input
              type="date"
              {...register("previousJobEnd")}
              className="form-control"
            />
          </div>
        </div>

        {/* Visa / EAD Info */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <label className="form-label">Visa Type *</label>
            <input
              {...register("visaType", { required: "Visa type is required" })}
              className={`form-control ${errors.visaType ? "is-invalid" : ""}`}
            />
            {errors.visaType && (
              <div className="invalid-feedback">{errors.visaType.message}</div>
            )}
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">EAD Start Date *</label>
            <input
              type="date"
              {...register("eadStartDate", {
                required: "EAD start date required",
              })}
              className={`form-control ${
                errors.eadStartDate ? "is-invalid" : ""
              }`}
            />
            {errors.eadStartDate && (
              <div className="invalid-feedback">
                {errors.eadStartDate.message}
              </div>
            )}
          </div>
          <div className="col-md-4 mb-3">
            <label className="form-label">EAD End Date *</label>
            <input
              type="date"
              {...register("eadEndDate", { required: "EAD end date required" })}
              className={`form-control ${
                errors.eadEndDate ? "is-invalid" : ""
              }`}
            />
            {errors.eadEndDate && (
              <div className="invalid-feedback">
                {errors.eadEndDate.message}
              </div>
            )}
          </div>
        </div>

        {/* Job Preferences */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">
              Apply for Full-time or Internship? *
            </label>
            <select
              {...register("jobType", { required: "Please select" })}
              className={`form-select ${errors.jobType ? "is-invalid" : ""}`}
            >
              <option value="">Select</option>
              <option value="fulltime">Full-time</option>
              <option value="internship">Internship</option>
            </select>
            {errors.jobType && (
              <div className="invalid-feedback">{errors.jobType.message}</div>
            )}
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">
              Apply for W2 or 1099 (Contract Jobs)? *
            </label>
            <select
              {...register("contractType", { required: "Please select" })}
              className={`form-select ${
                errors.contractType ? "is-invalid" : ""
              }`}
            >
              <option value="">Select</option>
              <option value="w2">W2</option>
              <option value="1099">1099</option>
            </select>
            {errors.contractType && (
              <div className="invalid-feedback">
                {errors.contractType.message}
              </div>
            )}
          </div>
        </div>

        {/* Preferred Jobs */}
        <div className="mb-3">
          <label className="form-label">Preferred Job Positions *</label>
          <textarea
            {...register("preferredJobs", {
              required: "Preferred jobs required",
            })}
            className={`form-control ${
              errors.preferredJobs ? "is-invalid" : ""
            }`}
            rows={2}
          />
          {errors.preferredJobs && (
            <div className="invalid-feedback">
              {errors.preferredJobs.message}
            </div>
          )}
        </div>

        {/* Salary */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Hourly Wage Expectation</label>
            <input
              {...register("hourlyWage")}
              className="form-control"
              placeholder="USD"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Annual Salary Expectation *</label>
            <input
              {...register("annualSalary", {
                required: "Annual salary required",
              })}
              className={`form-control ${
                errors.annualSalary ? "is-invalid" : ""
              }`}
              placeholder="USD"
            />
            {errors.annualSalary && (
              <div className="invalid-feedback">
                {errors.annualSalary.message}
              </div>
            )}
          </div>
        </div>

        {/* Salary Flexibility */}
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">
              If a company offers less than your expectation, can we apply? *
            </label>
            <select
              {...register("salaryFlexibility", { required: "Please select" })}
              className={`form-select ${
                errors.salaryFlexibility ? "is-invalid" : ""
              }`}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="other">Other</option>
            </select>
            {errors.salaryFlexibility && (
              <div className="invalid-feedback">
                {errors.salaryFlexibility.message}
              </div>
            )}
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">If 'Other', please specify</label>
            <input
              {...register("otherSalaryNote")}
              className="form-control"
              placeholder="Explain here..."
            />
          </div>
        </div>

        {/* Next Button */}
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
