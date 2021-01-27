// Render Prop
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { IconButton } from "@material-ui/core";

const QuestionsForm = ({ isopen, setOpen }) => (
  <div>
    
    <Formik
      initialValues={{ Question: "" }}
      onSubmit={async (values) => {
        console.log(values);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().required("Required"),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="Question" style={{ display: "block" }}>
              Question
            </label>
            <input
              id="question"
              placeholder="Place your Question"
              type="text"
              value={values.Question}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.Question && touched.Question
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.Question && touched.Question && (
              <div className="input-feedback">{errors.Question}</div>
            )}
            <button
              className="quiz__post__btn"
              onClick={() => setOpen(!isopen)}
            >
              <IconButton>Post</IconButton>
            </button>

            <button
              className="quiz__post__btn"
              style={{ left: `10%` }}
              onClick={() => setOpen(!isopen)}
            >
              <IconButton>cancel</IconButton>
            </button>
          </form>
        );
      }}
    </Formik>
  </div>
);

export default QuestionsForm;
