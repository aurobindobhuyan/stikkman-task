import express from "express";
import * as courseController from "../controllers/course/courseController";
import * as validator from "../controllers/course/validator";

const router = express.Router();

router
  .route("/")
  .get(courseController.getAllCourse)
  .post(validator.createCourse, courseController.createCourse);

router.post("/addCourses", courseController.addManyCourse);
router.get(
  "/filter-by-authors",
  validator.getCourseByAuthor,
  courseController.getCourseByAuthor
);

router
  .route("/:courseId")
  .get(validator.getOneCourse, courseController.getOneCourse)
  .put(validator.updateCourse, courseController.updateCourse)
  .delete(validator.deleteCourse, courseController.deleteCourse);

export default router;
