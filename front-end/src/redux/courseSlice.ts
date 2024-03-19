import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICourse } from "../pages/Course/interface";
import { RootState } from "./store";

interface ICourseState {
  course: ICourse[];
}

const initialState: ICourseState = {
  course: [],
};

export const startGetCourse = createAsyncThunk(
  "/course/getCourses",
  async () => {
    try {
      const result = await axios.get("http://localhost:8000/course");
      return result.data;
    } catch (error: any) {
      return error.response;
    }
  }
);

export const startAddMany = createAsyncThunk("/course/addMany", async () => {
  try {
    const response = await axios.post(
      "http://localhost:8000/course/addCourses"
    );
    return response.data;
  } catch (error: any) {
    return error.response;
  }
});

export const startCreateCourse = createAsyncThunk(
  "/course/createCourse",
  async (data: any) => {
    try {
      const response = await axios.post("http://localhost:8000/course", data);
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }
);

export const startSearchByAuthor = createAsyncThunk(
  "/course/searchByAuthor",
  async (search: string) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/course/filter-by-authors?author=${search}`
      );
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }
);

export const startUpdateCourse = createAsyncThunk(
  "/course/updateCourse",
  async (data: any) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/course/${data._id}`,
        data
      );
      return response.data;
    } catch (error: any) {
      return error.response;
    }
  }
);

export const startDeleteCourse = createAsyncThunk(
  "/course/deleteCourse",
  async (id: any) => {
    try {
      const result = await axios.delete(`http://localhost:8000/course/${id}`);
      return result.data;
    } catch (error: any) {
      return error.response;
    }
  }
);

const courseSlice = createSlice({
  name: "Course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(startGetCourse.fulfilled, (state, action) => {
      if (action.payload.status === true) {
        state.course = action.payload.data;
      }
    });

    builder.addCase(startAddMany.fulfilled, (state, action) => {
      if (action.payload.status === true) {
        state.course.push(...action.payload.data);
      }
    });

    builder.addCase(startCreateCourse.fulfilled, (state, action) => {
      if (action.payload.status === true) {
        state.course.push(action.payload.data);
      }
    });

    builder.addCase(startUpdateCourse.fulfilled, (state, action) => {
      if (action.payload.status === true) {
        state.course = state.course.map((ele) => {
          if (ele._id === action.payload.data._id) {
            return action.payload.data;
          } else {
            return ele;
          }
        });
      }
    });

    builder.addCase(startDeleteCourse.fulfilled, (state, action) => {
      if (action.payload.status === true) {
        const findIndex = state.course.findIndex(
          (ele) => ele._id === action.payload.data
        );
        state.course.splice(findIndex, 1);
      }
    });
  },
});

export const allCourses = (state: RootState) => state.course.course;
export const getCourseById = (state: RootState, id: any) =>
  state.course.course.find((ele) => ele._id === id);

export default courseSlice.reducer;
