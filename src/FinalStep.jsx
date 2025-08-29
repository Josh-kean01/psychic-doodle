// // FinalStep.jsx
// import { useForm } from "react-hook-form";
// import { useFormContext } from "./FormContext";

// const FinalStep = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const { formData, updateFormData } = useFormContext();

//   const onSubmit = (data) => {
//     const finalData = { ...formData, ...data };
//     console.log("Final Form Data:", finalData);
//     alert("Form submitted successfully!");
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="p-4 border rounded shadow-sm"
//     >
//       <h2 className="mb-4 title">Final Section</h2>

//       <div className="row">
//         {/* Apply all over USA */}
//         <div className="col-md-6 mb-3">
//           <label className="form-label">
//             Do you want us to apply for jobs all over the USA? *
//           </label>
//           <select
//             className="form-select"
//             {...register("applyAllUSA", {
//               required: "This field is required",
//             })}
//           >
//             <option value="">Select</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//           {errors.applyAllUSA && (
//             <div className="text-danger">{errors.applyAllUSA.message}</div>
//           )}
//         </div>

//         {/* Location preference if NO */}
//         <div className="col-md-6 mb-3">
//           <label className="form-label">
//             If NO above, list your location preference
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             {...register("locationPreference")}
//           />
//         </div>

//         {/* Remote jobs apply anywhere */}
//         <div className="col-md-6 mb-3">
//           <label className="form-label">
//             For REMOTE jobs, can we apply all over the USA? *
//           </label>
//           <select
//             className="form-select"
//             {...register("remoteAllUSA", {
//               required: "This field is required",
//             })}
//           >
//             <option value="">Select</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//           {errors.remoteAllUSA && (
//             <div className="text-danger">{errors.remoteAllUSA.message}</div>
//           )}
//         </div>

//         {/* Remote location preference if NO */}
//         <div className="col-md-6 mb-3">
//           <label className="form-label">
//             If NO above, list location preference for REMOTE jobs
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             {...register("remoteLocationPreference")}
//           />
//         </div>
//       </div>

//       {/* Companies to exclude */}
//       <div className="mb-3">
//         <label className="form-label">
//           Is there any company you DO NOT want us to apply to? *
//         </label>
//         <textarea
//           className="form-control"
//           rows="2"
//           {...register("excludeCompanies", {
//             required: "This field is required",
//           })}
//         />
//         {errors.excludeCompanies && (
//           <div className="text-danger">{errors.excludeCompanies.message}</div>
//         )}
//       </div>

//       <div className="row">
//         {/* Whatsapp for support */}
//         <div className="col-md-6 mb-3">
//           <label className="form-label">
//             Your Whatsapp number for Customer Support *
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             {...register("whatsapp", { required: "This field is required" })}
//           />
//           {errors.whatsapp && (
//             <div className="text-danger">{errors.whatsapp.message}</div>
//           )}
//         </div>

//         {/* New or returning customer */}
//         <div className="col-md-6 mb-3">
//           <label className="form-label">
//             Are you a new customer or a returning customer? *
//           </label>
//           <select
//             className="form-select"
//             {...register("customerType", {
//               required: "This field is required",
//             })}
//           >
//             <option value="">Select</option>
//             <option value="new">New Customer</option>
//             <option value="returning">Returning Customer</option>
//           </select>
//           {errors.customerType && (
//             <div className="text-danger">{errors.customerType.message}</div>
//           )}
//         </div>
//       </div>

//       <div className="row">
//         {/* How did you hear about Oceansmith */}
//         <div className="col-md-6 mb-3">
//           <label className="form-label">
//             How did you hear about Oceansmith?
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             {...register("referralSource")}
//           />
//         </div>
//         {/* Friend referral */}
//         <div className="col-md-6 mb-3">
//           <label className="form-label">
//             If your friend referred us, please mention their name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             {...register("friendReferral")}
//           />
//         </div>
//       </div>

//       {/* Navigation buttons */}
//       <div className="d-flex justify-content-between">
//         <button
//           type="button"
//           className="btn btn-secondary"
//           onClick={() => window.history.back()}
//         >
//           Back
//         </button>
//         <button type="submit" className="btn btn-success">
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

// export default FinalStep;

// FinalStep.jsx
import { useForm } from "react-hook-form";
import { useFormContext } from "./FormContext";

const FinalStep = () => {
  const { register, handleSubmit } = useForm();
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
      <h2 className="mb-4 title">Final Section</h2>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">
            Do you want us to apply for jobs all over the USA?
          </label>
          <select
            className="form-select"
            {...register("applyAllUSA")}
            defaultValue="yes"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">
            If NO above, list your location preference
          </label>
          <input
            type="text"
            className="form-control"
            {...register("locationPreference")}
            defaultValue="California"
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">
            For REMOTE jobs, can we apply all over the USA?
          </label>
          <select
            className="form-select"
            {...register("remoteAllUSA")}
            defaultValue="yes"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">
            If NO above, list location preference for REMOTE jobs
          </label>
          <input
            type="text"
            className="form-control"
            {...register("remoteLocationPreference")}
            defaultValue="Remote East Coast"
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Is there any company you DO NOT want us to apply to?
        </label>
        <textarea
          className="form-control"
          rows="2"
          {...register("excludeCompanies")}
          defaultValue="None"
        />
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">
            Your Whatsapp number for Customer Support
          </label>
          <input
            type="text"
            className="form-control"
            {...register("whatsapp")}
            defaultValue="+1234567890"
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">
            Are you a new customer or a returning customer?
          </label>
          <select
            className="form-select"
            {...register("customerType")}
            defaultValue="new"
          >
            <option value="new">New Customer</option>
            <option value="returning">Returning Customer</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">
            How did you hear about Oceansmith?
          </label>
          <input
            type="text"
            className="form-control"
            {...register("referralSource")}
            defaultValue="Google"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">
            If your friend referred us, please mention their name
          </label>
          <input
            type="text"
            className="form-control"
            {...register("friendReferral")}
            defaultValue="John Doe"
          />
        </div>
      </div>

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
