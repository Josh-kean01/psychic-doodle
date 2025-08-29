// // Step2.jsx
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { useFormContext } from "./FormContext";

// const Step2 = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const { updateFormData } = useFormContext();
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     updateFormData(data);
//     navigate("/step3");
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="p-4 border rounded shadow-sm"
//     >
//       <h2 className="mb-4 title">Education</h2>

//       <div className="row">
//         {/* Do you have a bachelor's degree? */}
//         <div className="col-md-4 mb-3">
//           <label className="form-label">Do you have a bachelor’s degree?</label>
//           <select
//             className="form-select "
//             {...register("hasBachelors", {
//               required: "This field is required",
//             })}
//           >
//             <option value="">Select</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//           {errors.hasBachelors && (
//             <div className="text-danger">{errors.hasBachelors.message}</div>
//           )}
//         </div>

//         {/* University */}
//         <div className="col-md-8 mb-3">
//           <label className="form-label">University/College (Bachelor’s)</label>
//           <input
//             type="text"
//             className="form-control"
//             {...register("university")}
//           />
//         </div>
//       </div>

//       {/* Start / End Date */}
//       <div className="row">
//         <div className="col-md-6 mb-3">
//           <label className="form-label">Start Date</label>
//           <input
//             type="date"
//             className="form-control"
//             {...register("eduStart")}
//           />
//         </div>
//         <div className="col-md-6 mb-3">
//           <label className="form-label">End Date</label>
//           <input type="date" className="form-control" {...register("eduEnd")} />
//         </div>
//       </div>

//       <div className="row">
//         {/* CGPA */}
//         <div className="col-md-3">
//           <label className="form-label">CGPA Bachelor’s</label>
//           <input type="text" className="form-control" {...register("cgpa")} />
//         </div>

//         {/* Highest education level */}
//         <div className="col-md-4">
//           <label className="form-label">
//             Highest education level achieved *
//           </label>
//           <select
//             className="form-select"
//             {...register("educationLevel", {
//               required: "This field is required",
//             })}
//           >
//             <option selected value="bachelors">
//               Bachelor’s
//             </option>
//             <option value="masters">Master’s</option>
//             <option value="phd">PhD</option>
//             <option value="other">Other</option>
//           </select>
//           {errors.educationLevel && (
//             <div className="text-danger">{errors.educationLevel.message}</div>
//           )}
//         </div>

//         {/* If other */}
//         <div className="col-md-5">
//           <label className="form-label">If you chose 'Other', specify</label>
//           <input
//             type="text"
//             className="form-control"
//             {...register("otherEdu")}
//           />
//         </div>
//       </div>

//       {/* Languages known */}
//       <div className="mb-3">
//         <label className="form-label">Languages known</label>
//         <input
//           type="text"
//           placeholder="Comma-separated"
//           className="form-control"
//           {...register("languages")}
//         />
//       </div>

//       {/* Certification */}
//       <div className="mb-3">
//         <label className="form-label">Certification (If any) *</label>
//         <input
//           type="text"
//           className="form-control"
//           {...register("certification", {
//             required: "Certification is required",
//           })}
//         />
//         {errors.certification && (
//           <div className="text-danger">{errors.certification.message}</div>
//         )}
//       </div>

//       {/* Navigation buttons */}
//       <div className="d-flex justify-content-between">
//         <button
//           type="button"
//           className="btn btn-secondary"
//           onClick={() => navigate("/")}
//         >
//           Back
//         </button>
//         <button type="submit" className="btn btn-primary">
//           Next
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Step2;

// Step2.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "./FormContext";

const Step2 = () => {
  const { register, handleSubmit } = useForm();
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
      <h2 className="mb-4 title">Education</h2>

      <div className="row">
        {/* Do you have a bachelor's degree? */}
        <div className="col-md-4 mb-3">
          <label className="form-label">Do you have a bachelor’s degree?</label>
          <select
            className="form-select"
            defaultValue="yes"
            {...register("hasBachelors")}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* University */}
        <div className="col-md-8 mb-3">
          <label className="form-label">University/College (Bachelor’s)</label>
          <input
            type="text"
            className="form-control"
            defaultValue="Sample University"
            {...register("university")}
          />
        </div>
      </div>

      {/* Start / End Date */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Start Date</label>
          <input
            type="date"
            className="form-control"
            defaultValue="2020-01-01"
            {...register("eduStart")}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">End Date</label>
          <input
            type="date"
            className="form-control"
            defaultValue="2024-01-01"
            {...register("eduEnd")}
          />
        </div>
      </div>

      <div className="row">
        {/* CGPA */}
        <div className="col-md-3">
          <label className="form-label">CGPA Bachelor’s</label>
          <input
            type="text"
            className="form-control"
            defaultValue="3.8"
            {...register("cgpa")}
          />
        </div>

        {/* Highest education level */}
        <div className="col-md-4">
          <label className="form-label">Highest education level achieved</label>
          <select
            className="form-select"
            defaultValue="bachelors"
            {...register("educationLevel")}
          >
            <option value="bachelors">Bachelor’s</option>
            <option value="masters">Master’s</option>
            <option value="phd">PhD</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* If other */}
        <div className="col-md-5">
          <label className="form-label">If you chose 'Other', specify</label>
          <input
            type="text"
            className="form-control"
            defaultValue=""
            {...register("otherEdu")}
          />
        </div>
      </div>

      {/* Languages known */}
      <div className="mb-3">
        <label className="form-label">Languages known</label>
        <input
          type="text"
          placeholder="Comma-separated"
          className="form-control"
          defaultValue="English, French"
          {...register("languages")}
        />
      </div>

      {/* Certification */}
      <div className="mb-3">
        <label className="form-label">Certification (If any)</label>
        <input
          type="text"
          className="form-control"
          defaultValue="AWS Certified Developer"
          {...register("certification")}
        />
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
