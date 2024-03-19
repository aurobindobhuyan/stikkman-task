// import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ICourse } from "../interface";
import "./form.css";

interface Props {
  course?: ICourse;
  handleCancel?: () => void;
  handleSubmit: (value: any) => void;
}

const Form: React.FC<Props> = ({ course, handleSubmit, handleCancel }) => {
  const formik = useFormik({
    initialValues: {
      name: course?.name || "",
      author: course?.author || "",
      thumbnail: course?.thumbnail || "",
      description: course?.description || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      author: Yup.string().required("Author is required"),
      thumbnail: Yup.string().url().required("Thumbnail is required"),
      description: Yup.string(),
    }),
    onSubmit: (values) => {
      if (course?._id) {
        handleSubmit({ ...values, _id: course._id });
      } else {
        handleSubmit(values);
      }
    },
  });

  return (
    <div className="form-container">
      <div className="form-card">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}

          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formik.values.author}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.author && formik.errors.author && (
            <div className="error">{formik.errors.author}</div>
          )}

          <label htmlFor="thumbnail">Thumbnail:</label>
          <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            value={formik.values.thumbnail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.thumbnail && formik.errors.thumbnail && (
            <div className="error">{formik.errors.thumbnail}</div>
          )}

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description && (
            <div className="error">{formik.errors.description}</div>
          )}

          <button type="submit">{course ? "Save" : "Create"}</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
