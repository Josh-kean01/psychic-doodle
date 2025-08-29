// // Step4.jsx
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { useFormContext } from "./FormContext";

// const Step4 = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const { updateFormData } = useFormContext();
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     updateFormData(data);
//     navigate("/final"); // go to next step
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="p-4 border rounded shadow-sm"
//     >
//       <h2 className="mb-4 title">Demographics & Messages</h2>

//       <div className="row">
//         {/* Gender */}
//         <div className="col-md-6 mb-3">
//           <label className="form-label">Gender *</label>
//           <select
//             className="form-select"
//             {...register("gender", { required: "This field is required" })}
//           >
//             <option value="">Select</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="nonBinary">Non-binary</option>
//             <option value="preferNot">Prefer not to say</option>
//           </select>
//           {errors.gender && (
//             <div className="text-danger">{errors.gender.message}</div>
//           )}
//         </div>

//         {/* Hispanic/Latino */}
//         <div className="col-md-6 mb-3">
//           <label className="form-label">Are you Hispanic/Latino? *</label>
//           <select
//             className="form-select"
//             {...register("hispanicLatino", {
//               required: "This field is required",
//             })}
//           >
//             <option value="">Select</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//           {errors.hispanicLatino && (
//             <div className="text-danger">{errors.hispanicLatino.message}</div>
//           )}
//         </div>

//         {/* Race */}
//         <div className="col-md-6 mb-3">
//           <label className="form-label">Race</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="e.g., Asian"
//             {...register("race")}
//           />
//         </div>

//         {/* Veteran */}
//         <div className="col-md-6 mb-3">
//           <label className="form-label">Are you a Veteran? *</label>
//           <select
//             className="form-select"
//             {...register("veteran", { required: "This field is required" })}
//           >
//             <option value="">Select</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//           {errors.veteran && (
//             <div className="text-danger">{errors.veteran.message}</div>
//           )}
//         </div>
//       </div>

//       {/* Disability */}
//       <div className="mb-3">
//         <label className="form-label">Do you have a disability? *</label>
//         <select
//           className="form-select"
//           {...register("disability", { required: "This field is required" })}
//         >
//           <option value="">Select</option>
//           <option value="yes">Yes</option>
//           <option value="no">No</option>
//         </select>
//         {errors.disability && (
//           <div className="text-danger">{errors.disability.message}</div>
//         )}
//       </div>

//       {/* Message to Hiring Manager */}
//       <div className="mb-3">
//         <label className="form-label">
//           Your message to the Hiring Manager *
//         </label>
//         <textarea
//           className="form-control"
//           rows="3"
//           placeholder="Write a concise message for the hiring manager"
//           maxLength={10000}
//           {...register("hiringManagerMsg", {
//             required: "This field is required",
//           })}
//         />
//         {errors.hiringManagerMsg && (
//           <div className="text-danger">{errors.hiringManagerMsg.message}</div>
//         )}
//       </div>

//       {/* Message to Job Hunt Specialist */}
//       <div className="mb-3">
//         <label className="form-label">
//           Your message to the Oceansmith Job Hunt Specialist(s) *
//         </label>
//         <textarea
//           className="form-control"
//           rows="3"
//           placeholder="Share anything that helps us apply on your behalf"
//           maxLength={10000}
//           {...register("specialistMsg", { required: "This field is required" })}
//         />
//         {errors.specialistMsg && (
//           <div className="text-danger">{errors.specialistMsg.message}</div>
//         )}
//       </div>

//       {/* Navigation buttons */}
//       <div className="d-flex justify-content-between">
//         <button
//           type="button"
//           className="btn btn-secondary"
//           onClick={() => navigate("/step3")}
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

// export default Step4;

// Step4.jsx
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "./FormContext";

const Step4 = () => {
  const { register, handleSubmit } = useForm();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    updateFormData(data);
    navigate("/final"); // go to next step
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 border rounded shadow-sm"
    >
      <h2 className="mb-4 title">Demographics & Messages</h2>

      <div className="row">
        {/* Gender */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            defaultValue="male"
            {...register("gender")}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="nonBinary">Non-binary</option>
            <option value="preferNot">Prefer not to say</option>
          </select>
        </div>

        {/* Hispanic/Latino */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Are you Hispanic/Latino?</label>
          <select
            className="form-select"
            defaultValue="no"
            {...register("hispanicLatino")}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Race */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Race</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g., Asian"
            defaultValue="Asian"
            {...register("race")}
          />
        </div>

        {/* Veteran */}
        <div className="col-md-6 mb-3">
          <label className="form-label">Are you a Veteran?</label>
          <select
            className="form-select"
            defaultValue="no"
            {...register("veteran")}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      {/* Disability */}
      <div className="mb-3">
        <label className="form-label">Do you have a disability?</label>
        <select
          className="form-select"
          defaultValue="no"
          {...register("disability")}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Message to Hiring Manager */}
      <div className="mb-3">
        <label className="form-label">Your message to the Hiring Manager</label>
        <textarea
          className="form-control"
          rows="3"
          defaultValue="Looking forward to contributing my skills!"
          {...register("hiringManagerMsg")}
        />
      </div>

      {/* Message to Job Hunt Specialist */}
      <div className="mb-3">
        <label className="form-label">
          Your message to the Oceansmith Job Hunt Specialist(s)
        </label>
        <textarea
          className="form-control"
          rows="3"
          defaultValue="Please keep me updated about my applications."
          {...register("specialistMsg")}
        />
      </div>

      {/* Navigation buttons */}
      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/step3")}
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

export default Step4;
