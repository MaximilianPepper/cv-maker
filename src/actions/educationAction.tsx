import { EducationInterface } from "../types";

export const SET_EDUCATION = "SET_EDUCATION";
export const DELETE_EDUCATION = "DELETE_EDUCATION";
export const UPDATE_EDUCATION = "UPDATE_EDUCATION";

export const setEducation = (obj: EducationInterface) => ({
  type: SET_EDUCATION,
  payload: obj,
});
export const deleteEducation = (obj: EducationInterface) => ({
  type: DELETE_EDUCATION,
  payload: obj,
});
export const updateEducation = (obj: EducationInterface) => ({
  type: UPDATE_EDUCATION,
  payload: obj,
});
