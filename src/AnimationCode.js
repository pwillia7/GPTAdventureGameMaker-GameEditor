import React from "react";
import { useField } from "formik";

// Define a custom component that renders animation code using Formik
const AnimationCode = ({ label, ...props }) => {
 // Use useField hook to access field state and helpers
 const [field, meta] = useField(props);
 return (
  <>
   <label htmlFor={props.id || props.name}>{label}</label>

   <textarea className="text-input" {...field} {...props} />

   {meta.touched && meta.error ? (
    <div className="error">{meta.error}</div>
   ) : null}
  </>
 );
};

export default AnimationCode;
